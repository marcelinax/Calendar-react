import { CalendarRowItem } from "./CalendarRowItem";
import React from "react";

export const CalendarRow = ({
  weekOffSet,
  startingIndex,
  daysInMonth,
  holidayDate,
}) => {
  const renderCalendarRow = () => {
    const calendarRowItems = [];
    for (let i = 1; i <= 7; i++) {
      const d = i - startingIndex + 1 + weekOffSet * 7;
      calendarRowItems.push(
        <CalendarRowItem
          key={i}
          dayOfMonth={d > daysInMonth || d < 1 ? "" : d}
          // holidayName={holidayDate === }
        />
      );
    }
    return calendarRowItems;
  };

  return <div className="calendar-row">{renderCalendarRow()}</div>;
};
