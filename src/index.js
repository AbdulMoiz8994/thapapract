import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

function Hi() {
  return (
    <div>
      <App />
      {/* <h1> {5 + 5}</h1> */}
      Hello World!
    </div>
  );
  function Hi(name) {
    return console.log(name);
  }
  Hi();
}
// ReactDOM.render(React.createElement(Hi), document.getElementById("root"));

ReactDOM.render(<Hi />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
