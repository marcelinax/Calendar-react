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
  events,
  currentMonthAndYear,
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
            (holiday) => +holiday.date.split(".")[0] === day
          )}
          isToday={moment().date() === day && isSelelectedMonthWithToday}
          events={events.filter(
            (event) =>
              +event.date.split("-")[2] === day &&
              +event.date.split("-")[1] === currentMonthAndYear[0] + 1 &&
              +event.date.split("-")[0] === currentMonthAndYear[1]
          )}
        />
      );
    }
    return calendarRowItems;
  };

  return <div className="calendar-row">{renderCalendarRow()}</div>;
};
