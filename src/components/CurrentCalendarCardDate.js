import React from "react";

export const CurrentCalendarCardDate = ({ currentDate }) => {
  return (
    <div className="current-calendar-card-date">
      <h2>{currentDate}</h2>
    </div>
  );
};
