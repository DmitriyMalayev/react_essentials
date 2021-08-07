import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <>
//     <App />,
//     <AppTwo />
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "Monday"),
//     React.createElement("li", null, "Tuesday"),
//     React.createElement("li", null, "Wednesday"),
//     React.createElement("li", null, "Thursday")
//   ),
//   document.getElementById("root")
// );

//What we want to create, properties, where we want to put it
// ReactDOM.render(
//   React.createElement("h1", {color: "blue"}, "Hello Everyone"),
//   document.getElementById('root')
// );
