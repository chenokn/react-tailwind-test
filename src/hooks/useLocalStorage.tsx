import { useEffect, useState } from "react";

const getStorageWithKey = (key: string, initialValue: any) => {
  const savedString = localStorage.getItem(key);
  const savedValue = savedString ? JSON.parse(savedString) : undefined;
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageWithKey(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
export default useLocalStorage;
