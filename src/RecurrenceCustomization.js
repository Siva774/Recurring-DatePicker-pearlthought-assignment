import React, { useContext } from 'react';
import { RecurrenceContext } from './RecurrenceContext';

const RecurrenceCustomization = () => {
  const { recurrence, customOptions, setCustomOptions } = useContext(RecurrenceContext);

 
  const handleCustomizationChange = (e) => {
    const { name, type, value, checked } = e.target;

    setCustomOptions((prevOptions) => ({
      ...prevOptions,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="mt-4">
      <h6>Customize Recurrence</h6>

      
      {recurrence === 'Weekly' && (
        <div className="form-group">
          <label>Select Days of the Week</label>
          <div className="d-flex flex-wrap">
            {daysOfWeek.map((day) => (
              <div key={day} className="me-3">
                <input
                  type="checkbox"
                  name={day}
                  onChange={handleCustomizationChange}
                  checked={!!customOptions[day]}
                />{' '}
                {day}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Monthly Recurrence */}
      {recurrence === 'Monthly' && (
        <div className="form-group">
          <label>Every Nth Day of the Month</label>
          <input
            type="number"
            className="form-control"
            name="nthDay"
            value={customOptions.nthDay || ''}
            onChange={handleCustomizationChange}
            placeholder="Enter N"
            min="1"
          />
          <label className="mt-2">Select Specific Days of the Month</label>
          <div className="d-flex flex-wrap">
            {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
              <div key={day} className="me-3">
                <input
                  type="checkbox"
                  name={`day-${day}`}
                  onChange={handleCustomizationChange}
                  checked={!!customOptions[`day-${day}`]}
                />{' '}
                {day}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Yearly Recurrence */}
      {recurrence === 'Yearly' && (
        <div className="form-group">
          <label>Every Year on:</label>
          <input
            type="date"
            className="form-control"
            name="yearlyDate"
            value={customOptions.yearlyDate || ''}
            onChange={handleCustomizationChange}
          />
        </div>
      )}
    </div>
  );
};

export default RecurrenceCustomization;