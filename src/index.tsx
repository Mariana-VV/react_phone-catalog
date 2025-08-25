import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ProductProvider } from './modules/shared/store/ProductContext';
import { Root } from './Root';
import { PhoneProvider } from './modules/shared/store/PhoneContext';
import { CartProvider } from './modules/CartModule/store/CartContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <ProductProvider>
      <PhoneProvider>
        <CartProvider>
          <Root />
        </CartProvider>
      </PhoneProvider>
    </ProductProvider>
  </HashRouter>,
);
