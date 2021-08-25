import React from "react";

export const CalendarCardChangeButtons = ({ nextMonth, previousMonth }) => {
  return (
    <div className="calendar-card-change-buttons">
      <button onClick={previousMonth}>
        <i className="bx bxs-chevron-left"></i>
      </button>
      <button onClick={nextMonth}>
        <i className="bx bxs-chevron-right"></i>
      </button>
    </div>
  );
};
