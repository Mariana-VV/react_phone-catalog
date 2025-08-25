import { Product } from '../types/Product';
import { getData } from '../utils/httpClient';

export function getProducts(url: string) {
  return getData<Product[]>(`/${url}`).then(products => {
    return products;
  });
}
