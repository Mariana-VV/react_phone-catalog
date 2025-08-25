import { Phone } from '../types/Phone';
import { getData } from '../utils/httpClient';

export function getPhones(url: string) {
  return getData<Phone[]>(`/${url}`).then(phones => {
    return phones;
  });
}
