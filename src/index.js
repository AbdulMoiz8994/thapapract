import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

function Hi({ names, width, options: { fulName, fatherName }, arry }) {
  console.log(names, width, fulName, fatherName, arry);

  return `Hi ${
    names === true ? "Open" : "Close"
  } and the width is ${width} and details are ${fulName}  father name is ${fatherName} and array ${arry}`;
}
ReactDOM.render(
  <Hi
    names={false}
    width={30}
    options={{ fulName: "Abdul moiz", fatherName: "Zafar Ali" }}
    arry={[1, 2, 4, 5]}
  />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
