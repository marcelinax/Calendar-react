import { Calendar } from "./components/Calendar";
import { CalendarEventsForm } from "./components/CalendarEventsForm";
import { Provider } from "react-redux";
import React from "react";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calendar />
        <CalendarEventsForm />
      </div>
    </Provider>
  );
}

export default App;
