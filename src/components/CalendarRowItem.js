import React, { useEffect, useState } from "react";

import { CalendarRowItemEvent } from "./CalendarRowItemEvent";
import CalendarRowItemEvents from "./CalendarRowItemEvents";
import { removeEvent } from "../state/eventSlice";
import { useDispatch } from "react-redux";

export const CalendarRowItem = ({
  dayOfMonth,
  holidays,
  isInCurrentMonth,
  isToday,
  events,
  date,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const showAllEventsForChosenDay = () => {
    setIsOpen(!isOpen);
  };

  const deleteEvent = (id) => {
    dispatch(removeEvent({ id }));
  };

  const renderEvents = () => {
    if (events.length > 0) {
      let e = [];

      if (events.length > 2) {
        e = [
          <CalendarRowItemEvent
            eventTime={events[0].time}
            eventTitle={events[0].title}
            deleteEvent={() => {
              deleteEvent(events[0].id);
            }}
          />,
          <CalendarRowItemEvent
            eventTime={events[1].time}
            eventTitle={events[1].title}
            deleteEvent={() => {
              deleteEvent(events[1].id);
            }}
          />,
          <p
            onClick={showAllEventsForChosenDay}
            className="see-more-events"
          >{`see ${events.length - 2} more`}</p>,
        ];
        return e;
      } else
        return events.map((event, index) => (
          <CalendarRowItemEvent
            eventTime={event.time}
            eventTitle={event.title}
            key={index}
            deleteEvent={() => {
              deleteEvent(event.id);
            }}
          />
        ));
    } else return null;
  };

  const closeEventsList = () => {
    setIsOpen(false);
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
      <CalendarRowItemEvents
        date={date}
        events={events}
        isOpen={isOpen}
        closeEventsList={() => closeEventsList()}
      />
    </div>
  );
};
