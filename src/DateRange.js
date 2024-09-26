import './DateRange.css';
import React, { useContext } from 'react';
import { RecurrenceContext } from './RecurrenceContext';

const DateRange = () => {
  const { setDateRange } = useContext(RecurrenceContext);

  const handleStartDateChange = (event) => {
    setDateRange((prevRange) => ({
      ...prevRange,
      startDate: event.target.value,
    }));
  };

  const handleEndDateChange = (event) => {
    setDateRange((prevRange) => ({
      ...prevRange,
      endDate: event.target.value,
    }));
  };

  return (
    <div className=" data-range-container mb-3 ">

      <label htmlFor="start-date" className="form-label">Start Date:</label>
      <input 
        type="date"
        id="start-date"
        className="form-control input"
        onChange={handleStartDateChange}
      />
      
      <label htmlFor="end-date" className="form-label mt-2">End Date:</label>
      <input
        type="date"
        id="end-date"
        className="form-control"
        onChange={handleEndDateChange}
      />
    </div>
  );
};

export default DateRange;
