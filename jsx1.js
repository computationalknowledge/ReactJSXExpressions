import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {
  render() {
    return <h1> What's going on {this.props.firstname} ? </h1>;
  }
}

class LikeCounter extends React.Component {
  render() {
    return <div> onclick={() => alert("1 clap")} ClapCounter</div>;
  }
}

React.createElement();

// const Greeting = (props) => <h1>Hello {props.name}! </h1>

// const what = React.createElement("h1", {}, "Hello Peter!");
// const what = <h1>Hello Peter's Class!</h1>;
// const Greeting = () => <h1>Hello Peter's Class!</h1>;

const where = document.getElementById("root");

// ReactDOM.render(what, where);

// ReactDOM.render(<Greeting />, where);
//  ReactDOM.render(<Greeting firstname="Mike" />, where);

// how to put a click handler on our JSX expression?
ReactDOM.render(<LikeCounter />, where);
