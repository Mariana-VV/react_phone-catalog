import { Accessory } from '../types/Accessory';
import { getData } from '../utils/httpClient';

export function getAccessories() {
  return getData<Accessory>('/accessories.json').then(
    accessories => accessories,
  );
}
