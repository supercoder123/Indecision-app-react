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

var count = 0;

var appRoot = document.getElementById("app");

var renderFunction = function renderFunction() {
  var templateTwo = //use className for jsx
  React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: function onClick() {
          console.log("addOne");
          count++;
          renderFunction();
        } },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: function onClick() {
          count--;
          renderFunction();
          console.log("minusOne");
        } },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: function onClick() {
          count = 0;
          renderFunction();
          console.log("reset");
        } },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderFunction();
