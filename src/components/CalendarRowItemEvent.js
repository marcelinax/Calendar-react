import React from "react";

export const CalendarRowItemEvent = ({ eventTitle, eventTime }) => {
  return (
    <div className="event">
      <p className="event-time">{eventTime}</p>
      <p className="event-title">
        {eventTitle.length > 10 ? `${eventTitle.substr(0, 10)}...` : eventTitle}
      </p>
    </div>
  );
};
