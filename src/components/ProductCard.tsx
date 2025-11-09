import React, { createContext, JSX } from 'react';

import { useProduct } from '../hooks/useProduct';
import type { InitialValues, Product, ProductCardhandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children: (args: ProductCardhandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties | undefined;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increseBy, maxCount, isMaxCountReached, reset, } = useProduct({
        onChange,
        product,
        value,
        initialValues,
    });

    return (
        <Provider value={{
            counter,
            increseBy,
            product,
            maxCount
        }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}
            >

                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    reset,
                    increseBy
                })}

            </div>
        </Provider>
    )
}
