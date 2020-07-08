import React from "react";

import ReactDOM from "react-dom";

React.createElement();

const Greeting = (props) => <h1>Hello {props.name}! </h1>

// const what = React.createElement("h1", {}, "Hello Peter!");
// const what = <h1>Hello Peter's Class!</h1>;
// const Greeting = () => <h1>Hello Peter's Class!</h1>;

const where = document.getElementById("root");

// ReactDOM.render(what, where);

// ReactDOM.render(<Greeting />, where);
ReactDOM.render(<Greeting name="Peanut" />, where);
