import React, { useContext } from 'react';
import { RecurrenceContext } from './RecurrenceContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useContext(RecurrenceContext);
  const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  return (
    <div className="form-group mt-4">
      <label>Recurrence Pattern</label>
      <select className="form-control" value={recurrence} onChange={(e) => setRecurrence(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default RecurrenceOptions;
