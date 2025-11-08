import type { JSX } from "react";
import type { Props as ProductButtonsProps } from "../components/ProductButtons";
import type { Props as ProductCardProps } from "../components/ProductCard";
import type { Props as ProductImageProps } from "../components/ProductImage";
import type { Props as ProductTitleProps } from "../components/ProductTitle";


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;

    increseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product;
    count: number;
}


export interface ProductInCart extends Product {
    count: number;
}


export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardhandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increseBy: (value: number) => void;
    reset: () => void;
}