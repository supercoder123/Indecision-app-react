class IndecisionApp extends React.Component {
  render() {
    const title = "IndecisionApp"
    const subtitle = "Put your life in the hands of a computer!";
    const options = ["Thing one","two ","three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options = {options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component{
  render() {
    return (
      <div>
        <button>What should i do ?</button>
      </div>
    );
  }
}

class Options extends React.Component{
  render() {
    return (
    <div>
      {
        this.props.options.map((option) => <Option key={option} optionText={option}/>)
      }
    </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
      Option: {this.props.optionText}
      </div>
    );
  }
}
class AddOption extends React.Component{
  render() {
    return (
      <div>
      AddOption
      </div>
    );
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
