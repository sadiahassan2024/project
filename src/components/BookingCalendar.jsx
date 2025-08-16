import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingCalendar({ onSelectDate }) {
  return (
    <div className="p-3">
      <h4>Book a Class</h4>
      <Calendar onClickDay={onSelectDate} />
    </div>
  );
}
