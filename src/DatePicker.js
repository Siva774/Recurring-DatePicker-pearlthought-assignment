import './DatePicker.css';
import React, { useContext } from 'react';
import { RecurrenceContext } from './RecurrenceContext';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import CalendarPreview from './CalendarPreview';
import DateRange from './DateRange';

const DatePicker = () => {
  const { dateRange, recurrence, customOptions } = useContext(RecurrenceContext);

  return (
    <div className="container image-with-opacity p-4 border rounded">
      <h3 className="text-center heading">Recurring Date Picker</h3>
      
      
      <div className="mb-3">
  <h5>Selected Date Range:</h5>
  <p className={dateRange.startDate ? 'highlighted' : ''}>
    From: {dateRange.startDate ? new Date(dateRange.startDate).toLocaleDateString() : 'Not selected'}
  </p>
  <p className={dateRange.endDate ? 'highlighted' : ''}>
    To: {dateRange.endDate ? new Date(dateRange.endDate).toLocaleDateString() : 'Not selected'}
  </p>
</div>


      
      <div className="mb-3" not se>
        <h5>Selected Recurrence:</h5>
        <p>{recurrence || 'Not selected'}</p>
      </div>

      
      {recurrence === 'Monthly' && customOptions.nthDay && (
        <div className="mb-3">
          <h5>Custom Options:</h5>
          <p>Every Nth Day of the Month: {customOptions.nthDay}</p>
        </div>
      )}

   
      <DateRange />
      <RecurrenceOptions />
      <RecurrenceCustomization />
      <CalendarPreview />
    </div>
  );
};

export default DatePicker;
