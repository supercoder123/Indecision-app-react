import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = p => {
    p.preventDefault();
    const option = p.target.elements.option.value.trim();
    const error = this.props.handleAddOptionState(option);
    p.target.elements.option.value = "";
    this.setState(() => ({ error }));
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option </button>
        </form>
      </div>
    );
  }
}
