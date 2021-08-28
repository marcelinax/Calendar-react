import { createSlice } from "@reduxjs/toolkit";

const loadInitalStateFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("events") || "[]");
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
        title,
        time,
        date,
      };
      state = [...state, event];
      saveStateToLocalStorage(state);
    },
  },
});
export const { addNewEvent } = eventSlice.actions;
export default eventSlice.reducer;
