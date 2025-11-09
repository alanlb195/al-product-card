import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProductCard } from '../../src/components/ProductCard';
import { product1, product2 } from '../data/produts';
import { ProductImage } from '../../src/components/ProductImage';

describe('Pruebas en <ProductImage />', () => {

    test('debe mostrar el component correctamente con la imagen personalizada', () => {

        const { asFragment } = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductImage img='https://hello.jpg' />
                    )
                }
            </ProductCard>
        )

        expect(asFragment()).toMatchSnapshot();
    });

    test('debe mostrar la imagen del producto recibido en ProductCard', () => {

        render(
            <ProductCard product={product2}>
                {() => <ProductImage />}
            </ProductCard>
        );

        const img = screen.getByRole('img');

        // src
        expect(img.getAttribute('src')).toBe('coffee-mug.png');

        // alt text
        expect(img.getAttribute('alt')).toBe(product2.title);

        // className
        expect(img.className.includes('productImg')).toBe(true);
    });

})
