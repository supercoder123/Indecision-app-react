class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOptionState = this.handleAddOptionState.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [] // ["dfdf","df","xc","34","bn","qw"]
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {}
    console.log("did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("did update");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("will unmount");
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
    console.log("handlepick");
  }
  handleAddOptionState(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    console.log(" add option");

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const title = "IndecisionApp";
    const subtitle = "Put your life in the hands of a computer!";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOptionState={this.handleAddOptionState} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
// class Header extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should i do ?
      </button>
    </div>
  );
};

// class Action extends React.Component{
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick}
//         disabled={!this.props.hasOptions}
//         >What should i do ?</button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component{
//
//   render() {
//     return (
//     <div>
//       <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//       {
//         this.props.options.map((option) => <Option key={option} optionText={option}/>)
//       }
//     </div>
//     );
//   }
// }

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please enter an item..yo</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//        {this.props.optionText}
//       </div>
//     );
//   }
// }
const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          //works without e parameter
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(p) {
    p.preventDefault();
    const option = p.target.elements.option.value.trim();
    const error = this.props.handleAddOptionState(option);
    p.target.elements.option.value = "";
    this.setState(() => ({ error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {               //props argument contains props ..(this) is not present
//   return (
//     <div>
//       <p>Name:{props.name}</p>
//       <p>Age:{props.age}</p>
//     </div>
//   );
// }
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
