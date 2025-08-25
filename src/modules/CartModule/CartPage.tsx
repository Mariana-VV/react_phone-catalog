import { CartList } from './components/CartList';
import cartPage from './CartPage.module.scss';
import { useContext } from 'react';
import { CartContext } from './store/CartContext';

export const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const price = () => {
    let sum = 0;

    cartItems.map(item => {
      sum += item.product.price;
    });

    return sum;
  };

  return (
    <section className={cartPage.cartPage}>
      <div className="container">
        <div className={cartPage.block}>
          <CartList />

          <div className={cartPage.total}>
            <p className={cartPage.sum}>${price()}</p>
            <p className={cartPage.for}>Total for {cartItems.length} items</p>
            <hr />
            <button className={cartPage.checkout}>Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};
