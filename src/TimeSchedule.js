import React from 'react';

function TimeSchedule({ date, onClose }) {


  return (
    <div className='daySchedule'>
        <button onClick={onClose}>X</button>
      <div className='dayScheduleHeader'>
        <h2>{date.toDateString()}</h2>
      </div>
      <p>Hello</p>
    </div>
  );
}

export default TimeSchedule;
