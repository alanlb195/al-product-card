

## Example:

```ts
import {
    ProductCard,
    ProductButtons,
    ProductImage,
    ProductTitle
} from '../components';
```

```tsx
<ProductCard
    key={product.id}
    product={product}
    className="bg-dark text-white"
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ count, isMaxCountReached, increseBy, reset }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```