import React, { useEffect, useState } from "react";

import { CalendarCardChangeButtons } from "./CalendarCardChangeButtons";
import { CalendarDaysOfWeekBar } from "./CalendarDaysOfWeekBar";
import { CalendarRow } from "./CalendarRow";
import { CurrentCalendarCardDate } from "./CurrentCalendarCardDate";
import axios from "axios";
import getMonth from "./../utils/getMonth";
import { useSelector } from "react-redux";

export const Calendar = () => {
  const moment = require("moment");

  const [currentMonth, setCurrentMonth] = useState(moment());
  const [holidays, setHolidays] = useState([]);
  const [previousMonth, setPreviousMonth] = useState(
    moment(currentMonth).subtract(1, "month")
  );
  const [nextMonth, setNextMonth] = useState(
    moment(currentMonth).add(1, "month")
  );

  const events = useSelector((state) => state.eventSlice.events);

  const getHolidays = () => {
    axios
      .get(
        `https://calendarific.com/api/v2/holidays?&api_key=5d4abf79e618196879802b5dc7507b240c8ebd4f&country=PL&year=${currentMonth.year()}`
      )
      .then((res) => setHolidays(res.data.response.holidays));
  };

  useEffect(() => {
    getHolidays();
  }, []);
  const getHolidaysForCurrentMonth = () => {
    const holidaysForCurrentMonth = holidays.filter(
      (holiday) => +holiday.date.iso.split("-")[1] === currentMonth.month() + 1
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
          events={events}
          currentMonthAndYear={[currentMonth.month(), currentMonth.year()]}
        />
      );
    }
    return calendarRows;
  };

  const goNextMonth = () => {
    const nextMonth = moment(currentMonth).add(1, "month");
    setCurrentMonth(nextMonth);
  };

  const goPreviousMonth = () => {
    const previousMonth = moment(currentMonth).subtract(1, "month");
    setCurrentMonth(previousMonth);
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
