import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}.{props.optionText}
    </p>

    <button
      className="button button--link"
      onClick={e => {
        //works without e parameter
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
