import React from "react";

export const CalendarRowItem = ({ dayOfMonth, holidayName }) => {
  return (
    <div className="calendar-row-item">
      <p className="day-of-month">{dayOfMonth}</p>
      <p>{holidayName}</p>
    </div>
  );
};
