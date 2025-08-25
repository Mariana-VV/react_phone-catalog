import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import { CartItem } from './CartItem';
import cartList from './CartList.module.scss';

export const CartList = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <section className={cartList.list}>
      {cartItems.length &&
        cartItems.map(item => (
          <CartItem product={item.product} key={item.id} />
        ))}
    </section>
  );
};
