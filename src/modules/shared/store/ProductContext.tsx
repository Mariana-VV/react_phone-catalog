/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useMemo, useState } from 'react';
import { Product } from '../types/Product';

import { getProducts } from '../services/products';

type T = {
  products: Product[];
  setProducts: (_products: Product[]) => void;
};

export const ProductContext = React.createContext<T>({
  products: [],
  setProducts: (_products: Product[]) => {},
});

type Props = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts('/products.json').then(p => setProducts(p));
  }, []);

  const value = useMemo(
    () => ({
      products,
      setProducts,
    }),
    [products, setProducts],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
