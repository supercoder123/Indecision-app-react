import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

//
// class OldSyntax {
//   constructor() {
//     this.name = "Mike";
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `HI my name is 1  ${this.name}`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const gg = oldSyntax.getGreeting;
// console.log(gg());
//
// //
// //
// //
// //
// class NewSyntax {
//   name = "Jen";
//   getGreeting = () => {
//     return `HI my name is 1  ${this.name}`;
//   };
// }
// const newSyntax = new NewSyntax();
// const ff = newSyntax.getGreeting;
// console.log(ff());
