import React, { useEffect, useState } from "react";

import { CalendarCardChangeButtons } from "./CalendarCardChangeButtons";
import { CalendarDaysOfWeekBar } from "./CalendarDaysOfWeekBar";
import { CalendarRow } from "./CalendarRow";
import { CurrentCalendarCardDate } from "./CurrentCalendarCardDate";

export const Calendar = () => {
  const moment = require("moment");

  const [currentMonth, setCurrentMonth] = useState(moment());
  const [previousMonth, setPreviousMonth] = useState(
    moment(currentMonth).subtract(1, "month")
  );
  const [nextMonth, setNextMonth] = useState(
    moment(currentMonth).add(1, "month")
  );

  const holidays = [
    { id: 1, name: "Dzień Cyśi", date: "15-08" },
    { id: 2, name: "Dzień Mata", date: "12-08" },
    { id: 3, name: "Dzień Dupy", date: "02-08" },
    { id: 4, name: "Dzień Chuchu", date: "01-09" },
  ];

  const getHolidaysForCurrentMonth = () => {
    const holidaysForCurrentMonth = holidays.filter(
      (holiday) => +holiday.date.split("-")[1] === currentMonth.month() + 1
    );

    return holidaysForCurrentMonth;
  };

  const getDaysInMonth = () => {
    console.log(moment(currentMonth).daysInMonth());
    return moment(currentMonth).daysInMonth();
  };

  const getFirstWeekDayOfMonth = () => {
    return moment(currentMonth).startOf("month").isoWeekday();
  };

  const renderCalendarRows = () => {
    const calendarRows = [];
    for (let i = 0; i < 6; i++) {
      calendarRows.push(
        <CalendarRow
          startingIndex={getFirstWeekDayOfMonth()}
          isSelelectedMonthWithToday={
            currentMonth.month() == moment().month() &&
            currentMonth.year() == moment().year()
          }
          weekOffSet={i}
          daysInMonth={getDaysInMonth()}
          key={i}
          daysInPreviousMonth={moment(previousMonth).daysInMonth()}
          holidaysForCurrentMonth={getHolidaysForCurrentMonth()}
        />
      );
    }
    return calendarRows;
  };

  const goNextMonth = () => {
    const nextMonth = moment(currentMonth).add(1, "month");
    setCurrentMonth(nextMonth);
    console.log(nextMonth);
  };

  const goPreviousMonth = () => {
    const previousMonth = moment(currentMonth).subtract(1, "month");
    setCurrentMonth(previousMonth);
    console.log(previousMonth);
  };

  const getMonth = (month) => {
    switch (month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "";
    }
  };

  const getCurrentDate = () => {
    return `${getMonth(moment(currentMonth).month())} ${moment(
      currentMonth
    ).year()}`;
  };

  return (
    <div className="calendar">
      <div className="calendar-top">
        <CurrentCalendarCardDate currentDate={getCurrentDate()} />
        <CalendarCardChangeButtons
          nextMonth={() => {
            goNextMonth();
          }}
          previousMonth={() => {
            goPreviousMonth();
          }}
        />
      </div>

      <CalendarDaysOfWeekBar />
      <div className="calendar-card">{renderCalendarRows()}</div>
    </div>
  );
};
