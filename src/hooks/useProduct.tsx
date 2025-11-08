import { useEffect, useRef, useState } from "react";
import type { onChangeArgs, Product } from "../interfaces/interfaces";
import type { InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
    value?: number;
    initialValues?: InitialValues
}

const DEFAULT_VALUE = 0


export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const initialValue = initialValues?.count || value || DEFAULT_VALUE;
    const maxCount = initialValues?.maxCount || undefined;

    const [counter, setCounter] = useState<number>(initialValue);
    const isMounted = useRef(false);


    const increseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0);

        if (maxCount) {
            newValue = Math.min(newValue, maxCount);
        }

        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value || initialValue);
    }, [value])

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
        }
    }, []);

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    return {
        counter,
        maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        increseBy,
        reset,
    }
}
