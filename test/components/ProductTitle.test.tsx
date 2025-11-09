import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProductTitle } from '../../src/components/ProductTitle'
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/produts';

describe('Pruebas en <ProductTitle />', () => {

    test('debe mostrar el componente con el título personalizado', () => {

        render(<ProductTitle title='My Custom title' />)

        expect(screen.getByText('My Custom title')).toBeTruthy()
    });

    test('debe aplicar la clase y estilo enviados por props', () => {

        render(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle
                        title='My Custom Title'
                        className="test-custom-class"
                            style={{ fontWeight: 'bold' }}
                        />
                    )
                }
            </ProductCard>
        )
        
        const span = screen.getByText('My Custom Title');
        expect(span.className).toContain('test-custom-class');
        expect(span.style.fontWeight).toBe('bold')
        
        // screen.debug(span);
    });
})
