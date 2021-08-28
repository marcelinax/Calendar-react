import React, { useState } from "react";
import { addNewEvent, eventSlice } from "./../state/eventSlice";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";

export const CalendarEventsForm = () => {
  const dispatch = useDispatch();

  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const handleEventTitle = (e) => {
    setEventTitle(e.target.value);
  };
  const handleEventDate = (e) => {
    setEventDate(e.target.value);
  };
  const handleEventTime = (e) => {
    setEventTime(e.target.value);
  };

  const addEvent = () => {
    if (moment(eventDate + "T23:59").isBefore(moment())) {
      alert("Invalid date!");
      return;
    }
    if (moment(eventDate + "T" + eventTime).isBefore(moment())) {
      alert("Invalid time!");
      return;
    }
    if (eventTitle === "") {
      alert(`Enter a event's title!`);
      return;
    }
    if (eventDate === "") {
      alert(`Enter the event's date!`);
      return;
    }
    if (eventTime === "") {
      alert(`Enter a event's time!`);
      return;
    } else {
      dispatch(
        addNewEvent({ title: eventTitle, time: eventTime, date: eventDate })
      );
      setEventDate("");
      setEventTime("");
      setEventTitle("");
    }
  };

  return (
    <div className="calendar-events-form">
      <h5>Add new event</h5>
      <div className="calendar-events-form-inputs">
        <div className="calendar-events-form-input">
          <label>Event title</label>
          <input
            onChange={handleEventTitle}
            value={eventTitle}
            type="text"
            placeholder="Event title"
          ></input>
        </div>
        <div className="calendar-events-form-input">
          <label>Event date</label>
          <input
            type="date"
            onChange={handleEventDate}
            value={eventDate}
          ></input>
        </div>
        <div className="calendar-events-form-input">
          <label>Event time</label>
          <input
            type="time"
            onChange={handleEventTime}
            value={eventTime}
          ></input>
        </div>
      </div>
      <button onClick={addEvent}>ADD</button>
    </div>
  );
};
