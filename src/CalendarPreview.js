import React, { useContext } from 'react';
import { RecurrenceContext } from './RecurrenceContext';

const CalendarPreview = () => {
  const { recurrence, customOptions, dateRange } = useContext(RecurrenceContext);
  const { startDate, endDate } = dateRange || {}; // Ensuring dateRange is defined

  // Function to calculate recurring dates
  const calculateRecurringDates = () => {
    const dates = [];
    if (!startDate || !endDate) {
      console.log("No date range provided"); 
      return dates; 
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    console.log("Calculating dates from:", start, "to:", end); // Debugging line

    // Daily recurrence
    if (recurrence === 'Daily') {
      let currentDate = new Date(start);
      while (currentDate <= end) {
        dates.push(currentDate.toDateString());
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    // Weekly recurrence
    else if (recurrence === 'Weekly') {
      const selectedDays = Object.keys(customOptions).filter(day => customOptions[day]);
      let currentDate = new Date(start);
      console.log("Selected Days:", selectedDays); // Debugging line

      while (currentDate <= end) {
        const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
        if (selectedDays.includes(dayOfWeek)) {
          dates.push(currentDate.toDateString());
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    // Monthly recurrence
    else if (recurrence === 'Monthly' && customOptions.nthDay) {
      const nthDay = parseInt(customOptions.nthDay, 10);
      let currentDate = new Date(start);

      while (currentDate <= end) {
        if (currentDate.getDate() === nthDay) {
          dates.push(currentDate.toDateString());
        }
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
    }

    // Yearly recurrence
    else if (recurrence === 'Yearly' && customOptions.yearlyDate) {
      const yearlyDate = new Date(customOptions.yearlyDate);
      let currentDate = new Date(start);

      while (currentDate <= end) {
        const newDate = new Date(currentDate.getFullYear(), yearlyDate.getMonth(), yearlyDate.getDate());
        if (newDate >= start && newDate <= end) {
          dates.push(newDate.toDateString());
        }
        currentDate.setFullYear(currentDate.getFullYear() + 1);
      }
    }

    return dates;
  };

  // Get the list of recurring dates
  const recurringDates = calculateRecurringDates();
  console.log("Recurring Dates:", recurringDates); // Debugging line

  return (
    <div className="mt-4">
      <h6 className="text-center mb-3">Selected Recurring Dates</h6>
      <ul className="list-group">
        {recurringDates.length > 0 ? (
          recurringDates.map((date, index) => (
            <li key={index} className="list-group-item list-group-item-action animated-item">
              {date}
            </li>
          ))
        ) : (
          <li className="list-group-item text-warning">No recurring dates to display.</li>
        )}
      </ul>
    </div>
  );
};

export default CalendarPreview;
