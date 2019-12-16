import * as React from "react";
import * as ReactDOM from "react-dom";

import HourlyPicker from "./components/HourlyPicker";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <HourlyPicker />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
