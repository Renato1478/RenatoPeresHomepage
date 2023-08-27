"use client";

import {
  useEffect,
  useState,
  ReactNode,
  createContext,
  useContext,
} from "react";

interface Props {
  children: ReactNode;
}

const useLocalStorage = (key: string, initialValue: boolean) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: boolean) => {
    try {
      setStoredValue(value);

      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

interface DarkModeValuesProps {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}

const defaultProvider: DarkModeValuesProps = {
  enabled: true,
  setEnabled: (val) => null,
};

const DarkModeContext = createContext(defaultProvider);

export function DarkModeContextProvider({ children }: Props) {
  // ** State
  const [enabled, setEnabled] = useLocalStorage("dark-theme", true);

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);

  return (
    <DarkModeContext.Provider
      value={{
        enabled,
        setEnabled,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export default function useDarkMode() {
  return useContext(DarkModeContext);
}
