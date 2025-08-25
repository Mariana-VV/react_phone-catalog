import { useState } from 'react';

export function useLocalStorage<CartItem>(
  key: string,
  startCartItem: CartItem,
): [CartItem, (cartItem: CartItem) => void] {
  const [cartItem, setCartItem] = useState(() => {
    const data = localStorage.getItem(key);

    if (data === null) {
      localStorage.setItem(key, JSON.stringify(startCartItem));

      return startCartItem;
    }

    try {
      return JSON.parse(data);
    } catch (e) {
      localStorage.removeItem(key);

      return startCartItem;
    }
  });

  const save = (newCartItem: CartItem) => {
    localStorage.setItem(key, JSON.stringify(newCartItem));
    setCartItem(newCartItem);
  };

  return [cartItem, save];
}
