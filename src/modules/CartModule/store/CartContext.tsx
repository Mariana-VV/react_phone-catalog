/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocaleStorage';
import { CartItem } from '../../shared/types/CartItem';

type T = {
  cartItems: CartItem[];
  setCartItems: (_cartItems: CartItem[]) => void;
};

export const CartContext = React.createContext<T>({
  cartItems: [],
  setCartItems: (_cartItems: CartItem[]) => {},
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'cartItems',
    [],
  );
  const value = useMemo(
    () => ({
      cartItems,
      setCartItems,
    }),
    [cartItems, setCartItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
