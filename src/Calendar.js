import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import NavigationBar from './NavigationBar';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [currentDate] = useState(new Date());



  return (
    <div className='app'>
      <NavigationBar /> 
      <div className='title-container'>
        <h1 className='title'>Calendar</h1>
      </div>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='date'>
        <span className='bold'>Selected Date:</span> {date.toDateString()}
        <br></br>
        <span className='bold'>Current Date:</span> {currentDate.toDateString()}
      </p>
    </div>
  );
}

export default Calendar;
