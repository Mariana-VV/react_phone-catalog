import { Tablet } from '../types/Tablet';
import { getData } from '../utils/httpClient';

export function getTablets() {
  return getData<Tablet>('/tablets.json').then(tablets => tablets);
}
