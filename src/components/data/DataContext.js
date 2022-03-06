import React, { createContext, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [theme, toggle] = useToggle();
  const [linksState, setLinksState] = useState('disabled');

  const initialValue = {
    searchCityField: {
      city,
      setCity,
    },
    themeToggle: {
      theme,
      toggle,
    },
    linksToggle: {
      linksState,
      setLinksState,
    },
  };
  return <DataContext.Provider value={initialValue}>{children}</DataContext.Provider>;
};

export default DataProvider;
