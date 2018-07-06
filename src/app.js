import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//        {this.props.optionText}
//       </div>
//     );
//   }
// }

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
