import React from "react";

export const CalendarRowItemEvent = ({
  eventTitle,
  eventTime,
  deleteEvent,
}) => {
  return (
    <div className="event">
      <p className="event-time">{eventTime}</p>
      <p className="event-title">
        {eventTitle.length > 10 ? `${eventTitle.substr(0, 8)}...` : eventTitle}
      </p>
      <i onClick={deleteEvent} className="bx bx-x"></i>
    </div>
  );
};
