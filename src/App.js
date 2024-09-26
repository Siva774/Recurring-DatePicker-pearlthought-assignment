import React from 'react';
import { RecurrenceProvider } from './RecurrenceContext';
import DatePicker from './DatePicker';


const App = () => {
  return (
    <RecurrenceProvider>
      <DatePicker />
    </RecurrenceProvider>
  );
};

export default App;
