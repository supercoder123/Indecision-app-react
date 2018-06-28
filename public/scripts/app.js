"use strict";

console.log("This is app.js : running");

var app = {
  title: "Indecision App",
  subtitle: "I am awesome",
  options: ['One', 'Two']

  //JSX
};var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    "\"here are your options:\"",
    app.options
  ) : React.createElement(
    "p",
    null,
    "\"No Options\""
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

var user = {
  name: "Ashley",
  age: 22,
  loc: "USA"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  } else {
    return 'Unknown';
  }
}

var name = "Ashley Fernandes";
var age = "2";
var loc = "usa";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.loc)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
