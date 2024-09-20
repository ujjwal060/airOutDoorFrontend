import React from 'react';
import './calendar.css';

const Calendar = ({ monthOffset }) => {
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

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2 style={{textAlign: "center"}}>
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
          const isToday = 
            day === today.getDate() &&
            displayedMonth.getMonth() === today.getMonth() &&
            displayedMonth.getFullYear() === today.getFullYear();
            
          return (
            <div
              key={index}
              className={`calendar-day current-month-day ${isToday ? 'current-day' : ''}`}
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
