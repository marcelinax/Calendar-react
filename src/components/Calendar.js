import React, { useEffect, useState } from "react";

import { CalendarCardChangeButtons } from "./CalendarCardChangeButtons";
import { CalendarDaysOfWeekBar } from "./CalendarDaysOfWeekBar";
import { CalendarRow } from "./CalendarRow";
import { CurrentCalendarCardDate } from "./CurrentCalendarCardDate";

export const Calendar = () => {
  const moment = require("moment");

  const [currentMonth, setCurrentMonth] = useState(moment());

  // const changeCurrentMonth = () => {
  //   setCurrentMonth()
  // }

  const holidays = [
    { id: 1, name: "Dzień Cyśi", date: "15-08-2021" },
    { id: 2, name: "Dzień Mata", date: "12-08-2021" },
  ];

  const getDaysInMonth = () => {
    // return moment().daysInMonth();
    console.log(moment(currentMonth).daysInMonth());
    return moment(currentMonth).daysInMonth();
  };

  const getFirstWeekDayOfMonth = () => {
    // return moment().startOf("month").isoWeekday();
    return moment(currentMonth).startOf("month").isoWeekday();
  };

  const renderCalendarRows = () => {
    const calendarRows = [];
    for (let i = 0; i < 6; i++) {
      calendarRows.push(
        <CalendarRow
          startingIndex={getFirstWeekDayOfMonth()}
          weekOffSet={i}
          daysInMonth={getDaysInMonth()}
          key={i}
          // holidayDate={}
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
      <CalendarCardChangeButtons
        nextMonth={() => {
          goNextMonth();
        }}
        previousMonth={() => {
          goPreviousMonth();
        }}
      />
      <CurrentCalendarCardDate currentDate={getCurrentDate()} />
      <CalendarDaysOfWeekBar />
      <div className="calendar-card">{renderCalendarRows()}</div>
    </div>
  );
};
