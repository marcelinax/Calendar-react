import React, { useEffect, useState } from "react";

import { CalendarDaysOfWeekBar } from "./CalendarDaysOfWeekBar";
import { CalendarRow } from "./CalendarRow";
import { CurrentCalendarCardDate } from "./CurrentCalendarCardDate";

export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState("");

  // const changeCurrentMonth = () => {
  //   setCurrentMonth()
  // }

  const holidays = [
    { id: 1, name: "Dzień Cyśi", date: "15.08.2021" },
    { id: 2, name: "Dzień Mata", date: "12.08.2021" },
  ];

  const moment = require("moment");

  const getDaysInMonth = () => {
    return moment().daysInMonth();
  };

  const getFirstWeekDayOfMonth = () => {
    return moment().startOf("month").isoWeekday();
  };

  const a = () => {
    holidays.map((holiday) => console.log(holiday));
    holidays.map((holiday) => console.log(moment(holiday.date).date()));
  };
  useEffect(() => {
    a();
  });

  const renderCalendarRows = () => {
    const calendarRows = [];
    for (let i = 0; i < 6; i++) {
      calendarRows.push(
        <CalendarRow
          startingIndex={getFirstWeekDayOfMonth()}
          weekOffSet={i}
          daysInMonth={getDaysInMonth()}
          key={i}
        />
      );
    }
    return calendarRows;
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

  return (
    <div className="calendar">
      <CurrentCalendarCardDate
        currentDate={`${getMonth(moment().month())} ${moment().year()}`}
      />
      <CalendarDaysOfWeekBar />
      <div className="calendar-card">{renderCalendarRows()}</div>
    </div>
  );
};
