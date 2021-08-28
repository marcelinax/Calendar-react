import { configureStore } from "@reduxjs/toolkit";
import { eventSlice } from "./state/eventSlice";

export default configureStore({
  reducer: {
    eventSlice: eventSlice.reducer,
  },
});
