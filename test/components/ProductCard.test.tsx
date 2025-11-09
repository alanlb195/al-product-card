import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/produts';

describe('Pruebas en <ProductCard />', () => {

    test('debe mostrar el componente con el título personalizado', () => {

        render(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card H1</h1>
                    )
                }
            </ProductCard>
        )

        expect(screen.getByText('Product Card H1')).toBeTruthy()
    });

    test('debe de incrementar el contador', () => {
        const { asFragment } = render(
            <ProductCard product={product1}>
                {
                    ({ count, increseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increseBy(+1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        )
        expect(asFragment()).toMatchSnapshot(); // snapshot de cajon
        
        const btnIncreseBy = screen.getByText('+1');
        const spanCount = screen.getByText('0');


        // test de incrementar contador
        expect(spanCount.textContent).toBe("0");
        fireEvent.click(btnIncreseBy);
        expect(spanCount.textContent).toBe("1");
        
        // screen.debug();
    });


});
