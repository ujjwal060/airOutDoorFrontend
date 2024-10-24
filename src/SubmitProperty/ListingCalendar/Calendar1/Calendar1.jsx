import React, { useState } from "react";
import "./calendar1.css";

const Calendar1 = ({ initialMonthOffset = 0, onDateChange, selectedDates }) => {
  const [monthOffset, setMonthOffset] = useState(initialMonthOffset);
  const today = new Date();
  const displayedMonth = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);

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

  const handlePrevMonth = (event) => {
    event.preventDefault();
    setMonthOffset((prevOffset) => prevOffset - 1);
  };

  const handleNextMonth = (event) => {
    event.preventDefault();
    setMonthOffset((prevOffset) => prevOffset + 1);
  };

  const handleDateClick = (day) => {
    const selectedDate = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), day);
    let { checkIn, checkOut } = selectedDates;

    if (!checkIn || (checkIn && checkOut)) {
      checkIn = selectedDate; // Set check-in date
      checkOut = null; // Reset check-out date
    } else if (checkIn && !checkOut && selectedDate > checkIn) {
      checkOut = selectedDate; // Set check-out date if valid
    }

    onDateChange(checkIn, checkOut); // Notify parent of the date change
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <h2 style={{ textAlign: "center" }}>
          {displayedMonth.toLocaleString("default", { month: "long" })} {displayedMonth.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>{">"}</button>
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
          
          const isCheckIn = selectedDates.checkIn && selectedDates.checkIn.getDate() === day && selectedDates.checkIn.getMonth() === displayedMonth.getMonth() && selectedDates.checkIn.getFullYear() === displayedMonth.getFullYear();
          const isCheckOut = selectedDates.checkOut && selectedDates.checkOut.getDate() === day && selectedDates.checkOut.getMonth() === displayedMonth.getMonth() && selectedDates.checkOut.getFullYear() === displayedMonth.getFullYear();
          
          return (
            <div
              key={index}
              className={`calendar-day current-month-day ${isToday ? 'current-day' : ''} ${isCheckIn ? 'check-in-day' : ''} ${isCheckOut ? 'check-out-day' : ''}`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar1;
