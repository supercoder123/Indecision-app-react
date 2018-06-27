"use strict";

console.log("This is app.js : running");

//JSX
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Hello World"
  ),
  React.createElement(
    "p",
    null,
    "Everything works now"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item 1"
    ),
    React.createElement(
      "li",
      null,
      "Item 2"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Ashley Fernandes"
  ),
  React.createElement(
    "p",
    null,
    "Age: 22"
  ),
  React.createElement(
    "p",
    null,
    "Location : Mumbai"
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRoot);
