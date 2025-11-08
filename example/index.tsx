import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../.';

const App = () => {
  const product = {
    id: '1',
    title: 'Coffee Mug',
    // img: 'coffee-mug.png',
  }
  return (
    <>
      <ProductCard
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
