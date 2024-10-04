import React from 'react';
import './calendar.css';

const Calendar = ({ monthOffset, checkInDate, checkOutDate }) => {
  const today = new Date();
  const currentDate = new Date();
  const displayedMonth = new Date(currentDate.setMonth(currentDate.getMonth() + monthOffset));

  const firstDayOfMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), 1).getDay();
  const daysInMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 0).getDate();

  const daysFromPreviousMonth = [];
  const prevMonthDaysCount = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), 0).getDate();

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    daysFromPreviousMonth.push(prevMonthDaysCount - i);
  }

  const daysOfCurrentMonth = [];
  for (let i = 1; i <= daysInMonth; i++) {
    daysOfCurrentMonth.push(i);
  }

  const formatDate = (date) => {
    return date instanceof Date && !isNaN(date) ? date.toISOString().split('T')[0] : null;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2 style={{ textAlign: "center" }}>
          {displayedMonth.toLocaleString('default', { month: 'long' })} {displayedMonth.getFullYear()}
        </h2>
      </div>
      <div className="calendar-grid">
        <div className="calendar-day c-day">Sun</div>
        <div className="calendar-day c-day">Mon</div>
        <div className="calendar-day c-day">Tue</div>
        <div className="calendar-day c-day">Wed</div>
        <div className="calendar-day c-day">Thu</div>
        <div className="calendar-day c-day">Fri</div>
        <div className="calendar-day c-day">Sat</div>

        {daysFromPreviousMonth.map((day, index) => (
          <div key={index} className="calendar-day prev-month-day">{day}</div>
        ))}

        {daysOfCurrentMonth.map((day, index) => {
          const dateToCheck = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), day);
          const formattedDate = formatDate(dateToCheck);
          
          const checkInDay = new Date(checkInDate).getDate();
          const checkInMonth = new Date(checkInDate).getMonth();
          const checkInYear = new Date(checkInDate).getFullYear();

          const checkOutDay = new Date(checkOutDate).getDate();
          const checkOutMonth = new Date(checkOutDate).getMonth();
          const checkOutYear = new Date(checkOutDate).getFullYear();

          const isCheckIn = (day === checkInDay && displayedMonth.getMonth() === checkInMonth && displayedMonth.getFullYear() === checkInYear);
          const isCheckOut = (day === checkOutDay && displayedMonth.getMonth() === checkOutMonth && displayedMonth.getFullYear() === checkOutYear);
          const isToday =
            day === today.getDate() &&
            displayedMonth.getMonth() === today.getMonth() &&
            displayedMonth.getFullYear() === today.getFullYear();

          const isInRange = checkInDate && checkOutDate &&
            (dateToCheck >= new Date(checkInDate) && dateToCheck < new Date(checkOutDate));

          return (
            <div
              key={index}
              className={`calendar-day current-month-day 
                ${isToday ? 'current-day' : ''} 
                ${isCheckIn ? 'check-in-day' : ''} 
                ${isCheckOut ? 'check-out-day' : ''} 
                ${isInRange ? 'booked-day' : ''}`}
              style={isCheckIn || isCheckOut ? { backgroundColor: 'pink', color: 'white' } : {}}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
