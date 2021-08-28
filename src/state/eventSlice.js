import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadInitalStateFromLocalStorage = () => {
  return { events: JSON.parse(localStorage.getItem("events") || "[]") };
};

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("events", JSON.stringify(state));
};

export const eventSlice = createSlice({
  name: "event",
  initialState: loadInitalStateFromLocalStorage(),
  reducers: {
    addNewEvent: (state, action) => {
      const { title, time, date } = action.payload;

      const event = {
        id: uuidv4(),
        title,
        time,
        date,
      };
      state.events = [...state.events, event];
      saveStateToLocalStorage(state.events);
    },
    removeEvent: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      const deleteStartIndex = state.events.map((e) => e.id).indexOf(id);
      state.events.splice(deleteStartIndex, 1);
      saveStateToLocalStorage(state.events);
    },
  },
});
export const { addNewEvent, removeEvent } = eventSlice.actions;
export default eventSlice.reducer;
