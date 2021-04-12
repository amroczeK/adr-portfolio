import React, { useState, createContext, useEffect } from 'react';
import appData from './data.json';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(appData);
  }, []);

  return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};
