import { CalendarRowItem } from "./CalendarRowItem";
import React from "react";
import moment from "moment";

export const CalendarRow = ({
  weekOffSet,
  startingIndex,
  daysInMonth,
  daysInPreviousMonth,
  holidaysForCurrentMonth,
  isSelelectedMonthWithToday,
  isToday,
}) => {
  const renderCalendarRow = () => {
    const calendarRowItems = [];
    for (let i = 1; i <= 7; i++) {
      const day = i - startingIndex + 1 + weekOffSet * 7;

      calendarRowItems.push(
        <CalendarRowItem
          key={i}
          dayOfMonth={
            day < 1
              ? daysInPreviousMonth - startingIndex + 1 + i
              : day > daysInMonth
              ? day - daysInMonth
              : day
          }
          isInCurrentMonth={day >= 1 && day <= daysInMonth}
          holidays={holidaysForCurrentMonth.filter(
            (holiday) => +holiday.date.split("-")[0] === day
          )}
          isToday={moment().date() === day && isSelelectedMonthWithToday}
        />
      );
    }
    return calendarRowItems;
  };

  return <div className="calendar-row">{renderCalendarRow()}</div>;
};
