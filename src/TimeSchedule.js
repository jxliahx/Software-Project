import React from 'react';

function TimeSchedule({ date, onClose }) {
  // You can fetch the time schedule data for the selected date here

  return (
    <div className='time-schedule'>
      <div className='time-schedule-header'>
        <h2>Time Schedule for {date.toDateString()}</h2>
        <button onClick={onClose}>Close</button>
      </div>
      {/* Add your time schedule content here */}
    </div>
  );
}

export default TimeSchedule;
