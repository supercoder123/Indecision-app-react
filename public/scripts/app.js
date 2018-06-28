"use strict";

var flag = true;
var appRoot = document.getElementById("app");

var renderFunction = function renderFunction() {
      var header = React.createElement(
            "div",
            null,
            React.createElement(
                  "h1",
                  null,
                  "Visibility Toggle"
            ),
            React.createElement(
                  "button",
                  { onClick: toggle },
                  flag ? "Show text" : "Hide text"
            ),
            React.createElement(
                  "p",
                  { hidden: flag },
                  "This is a piece of text"
            )
      );

      ReactDOM.render(header, appRoot);
};
var toggle = function toggle() {
      flag = !flag;
      renderFunction();
};
renderFunction();
