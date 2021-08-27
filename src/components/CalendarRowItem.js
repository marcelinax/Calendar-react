import React from "react";

export const CalendarRowItem = ({
  dayOfMonth,
  holidays,
  isInCurrentMonth,
  isToday,
}) => {
  return (
    <div className={isToday ? "calendar-row-item--today" : "calendar-row-item"}>
      <p
        className={
          isInCurrentMonth ? "day-of-current-month" : "day-of-other-months"
        }
      >
        {dayOfMonth}
      </p>
      <p className="holidays">{holidays.map((holiday) => holiday.name)}</p>
    </div>
  );
};
