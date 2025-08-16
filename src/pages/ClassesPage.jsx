import React, { useState } from 'react';
import BookingCalendar from '../components/BookingCalendar';

export default function ClassesPage() {
  const [date, setDate] = useState(null);
  return (
    <div className="p-3">
      <h1>Classes</h1>
      <BookingCalendar onSelectDate={setDate} />
      {date && <p>Selected: {date.toDateString()}</p>}
    </div>
  );
}
