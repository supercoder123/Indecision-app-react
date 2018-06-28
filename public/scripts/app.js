"use strict";

console.log("This is app.js : running");

var app = {
  title: "Indecision App",
  subtitle: "I am awesome",
  options: []
};

var onFormSubmit = function onFormSubmit(p) {
  p.preventDefault();
  var option = p.target.elements.option.value;
  if (option) {
    app.options.push(option);
    p.target.elements.option.value = " ";
  }
  console.log("form submit " + app.options);
  renderFunction();
};

var appRoot = document.getElementById("app");

var buttonReset = function buttonReset() {
  app.options = [];
  renderFunction();
  console.log("button reset");
};
var renderFunction = function renderFunction() {
  var template = React.createElement(
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
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "here are your option" : "No Options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: buttonReset },
      "Reset"
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
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
//JSX


renderFunction();
