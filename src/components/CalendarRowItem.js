import React, { useEffect } from "react";

import { CalendarRowItemEvent } from "./CalendarRowItemEvent";

export const CalendarRowItem = ({
  dayOfMonth,
  holidays,
  isInCurrentMonth,
  isToday,
  events,
}) => {
  const renderEvents = () => {
    console.log(events);
    if (events.length > 0) {
      let e = [];

      if (events.length > 2) {
        e = [
          <CalendarRowItemEvent
            eventTime={events[0].time}
            eventTitle={events[0].title}
          />,
          <CalendarRowItemEvent
            eventTime={events[1].time}
            eventTitle={events[1].title}
          />,
          <p className="see-more-events">{`see ${events.length - 2} more`}</p>,
        ];
        return e;
      } else
        return events.map((event, index) => (
          <CalendarRowItemEvent
            eventTime={event.time}
            eventTitle={event.title}
            key={index}
          />
        ));
    } else return null;
  };

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
      {events.length > 0 ? (
        <div className="events">{renderEvents()}</div>
      ) : null}
    </div>
  );
};
