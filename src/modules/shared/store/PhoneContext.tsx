/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useMemo, useState } from 'react';
import { Phone } from '../types/Phone';
import { getPhones } from '../services/phones';

type T = {
  phones: Phone[];
  setPhones: (_Phones: Phone[]) => void;
  isLoading?: boolean;
};

export const PhoneContext = React.createContext<T>({
  phones: [],
  setPhones: (_phones: Phone[]) => {},
  isLoading: false,
});

type Props = {
  children: React.ReactNode;
};

export const PhoneProvider: React.FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPhones('/phones.json')
      .then(p => setPhones(p))
      .finally(() => setIsLoading(false));
  }, []);

  const value = useMemo(
    () => ({
      phones,
      setPhones,
      isLoading,
    }),
    [phones, setPhones, isLoading],
  );

  return (
    <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
  );
};
