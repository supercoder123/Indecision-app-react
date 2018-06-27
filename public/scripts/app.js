"use strict";

console.log("This is app.js : running");
//JSX
var template = React.createElement(
  "p",
  null,
  "Everything works now"
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
