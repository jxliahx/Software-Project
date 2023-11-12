import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import NavigationBar from './NavigationBar';
import TimeSchedule from './TimeSchedule';

function Calendar1() {
  const [date, setDate] = useState(new Date());
  const [currentDate] = useState(new Date());
  const [isTimeScheduleOpen, setTimeScheduleOpen] = useState(false);

  const openTimeSchedule = () => {
    setTimeScheduleOpen(true);
  };

  const closeTimeSchedule = () => {
    setTimeScheduleOpen(false);
  };

  return (
    <div className='app'>
      <NavigationBar /> 
      <div className='title-container'>
        <h1 className='title'>Calendar
        <br>
        </br><button>Back</button></h1>
      </div>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} onClickDay={openTimeSchedule} />
      </div>
      <p className='date'>
        <span className='bold'>Selected Date:</span> {date.toDateString()}
        <br></br>
        <span className='bold'>Current Date:</span> {currentDate.toDateString()}
      </p>

      {isTimeScheduleOpen && (
        <TimeSchedule date={date} onClose={closeTimeSchedule} />
      )}
    </div>
  );
}

export default Calendar1;
