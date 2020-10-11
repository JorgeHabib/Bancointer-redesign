import { useState, useCallback } from 'react';

export default function useLocalStorage(key: string): [string | null, (value: string) => void] {
  const [storage, setStorage] = useState(() => {
    const storedData = localStorage.getItem(`BancoInter:${key}`);

    return storedData;
  });

  const updateStorage = useCallback((value: string) => {
    localStorage.setItem(`BancoInter:${key}`, value);
    setStorage(value);
  }, []);

  return [storage, updateStorage];
}
