import React from "react";

export const CalendarDaysOfWeekBar = () => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((dayOfWeek) => (
      <div className="day-of-week" key={dayOfWeek}>
        <p>{dayOfWeek}</p>
      </div>
    ));
  };

  return <div className="calendar-days-of-week-bar">{renderDaysOfWeek()}</div>;
};
