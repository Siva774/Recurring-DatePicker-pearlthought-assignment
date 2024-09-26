import React, { useState, createContext } from 'react';

export const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState('Daily');
  const [customOptions, setCustomOptions] = useState({});
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  return (
    <RecurrenceContext.Provider value={{ recurrence, setRecurrence, customOptions, setCustomOptions, dateRange, setDateRange }}>
      {children}
    </RecurrenceContext.Provider>
  );
};
