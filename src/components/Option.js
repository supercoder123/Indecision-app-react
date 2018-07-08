import React from "react";

const Option = props => (
  <div>
    {props.optionText}
    <button
      className="button button-link"
      onClick={e => {
        //works without e parameter
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
