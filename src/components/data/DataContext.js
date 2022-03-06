import React, { createContext, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [theme, toggle] = useToggle();

  const initialValue = {
    searchCityField: {
      city,
      setCity,
    },
    themeToggle: {
      theme,
      toggle,
    },
  };
  return <DataContext.Provider value={initialValue}>{children}</DataContext.Provider>;
};

export default DataProvider;
