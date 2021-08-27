import React from "react";

export const CalendarEventsForm = () => {
  return (
    <div className="calendar-events-form">
      <h5>Add new event</h5>
      <div className="calendar-events-form-inputs">
        <div className="calendar-events-form-input">
          <label>Event title</label>
          <input type="text" placeholder="Event title"></input>
        </div>
        <div className="calendar-events-form-input">
          <label>Event date</label>
          <input type="date"></input>
        </div>
        <div className="calendar-events-form-input">
          <label>Event time</label>
          <input type="time"></input>
        </div>
      </div>
      <button>ADD</button>
    </div>
  );
};
