import { useContext } from 'react';
import { Section } from '../shared/components/Section/Section';
import { Category } from './components/Category/Category';
import { Hero } from './components/Hero/Hero';
import { ProductContext } from '../shared/store/ProductContext';

export const HomePage = () => {
  const { products } = useContext(ProductContext);

  const sortedProductsByYear = products.sort((p1, p2) => p2.year - p1.year);
  const sortedProductsByPrice = products.sort((p1, p2) => p2.price - p1.price);

  return (
    <>
      <Hero />
      <Section title="Brand new models" products={sortedProductsByYear} />
      <Category />
      <Section title="Hot prices" products={sortedProductsByPrice} />
    </>
  );
};
