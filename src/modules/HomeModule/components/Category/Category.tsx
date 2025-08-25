/* eslint-disable max-len */
import { useContext } from 'react';
import c from './Category.module.scss';
import { ProductContext } from '../../../shared/store/ProductContext';

export const Category = () => {
  const { products } = useContext(ProductContext);
  const phones = products.filter(p => p.category === 'phones');
  const tablets = products.filter(p => p.category === 'tablets');
  const accessories = products.filter(p => p.category === 'accessories');

  return (
    <section className={c.category}>
      <div className="container">
        <h2 className="section__title">Shop by category</h2>
        <ul className={c.block}>
          <li className={c.box}>
            <img
              src="assets/images/hero/categories/category-1-phones.png"
              alt="phones"
            />
            <h4 className={c.title}>Mobile phones</h4>
            <p className={c.text}>{phones.length} models</p>
          </li>
          <li className={c.box}>
            <img
              src="assets/images/hero/categories/category-2-tablets.png"
              alt=""
            />
            <h4 className={c.title}>Tablets</h4>
            <p className={c.text}>{tablets.length} models</p>
          </li>
          <li className={c.box}>
            <img
              src="assets/images/hero/categories/category-3-accessories.png"
              alt=""
            />
            <h4 className={c.title}>Accessories</h4>
            <p className={c.text}>{accessories.length} models</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
