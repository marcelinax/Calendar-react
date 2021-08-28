import { CalendarRowItemEvent } from "./CalendarRowItemEvent";
import React from "react";

const CalendarRowItemEvents = ({ date, events, isOpen, closeEventsList }) => {
  const renderEvents = () => {
    return events.map((event, index) => (
      <CalendarRowItemEvent
        eventTime={event.time}
        eventTitle={event.title}
        key={index}
      />
    ));
  };

  return (
    <div
      className={
        isOpen ? "calendar-row-item-events--active" : "calendar-row-item-events"
      }
    >
      <div className="calendar-row-item-events-info">
        <p className="date">{date}</p>
        <i onClick={closeEventsList} className="bx bx-x"></i>
      </div>
      <div className="events-list">{renderEvents()}</div>
    </div>
  );
};

export default CalendarRowItemEvents;
