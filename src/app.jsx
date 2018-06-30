class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: ["Thing one","two ","three","four"]
    };
  }
  render() {
    const title = "IndecisionApp"
    const subtitle = "Put your life in the hands of a computer!";
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options = {this.state.options} />
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
  handlePick(){
    alert("handlePick")
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should i do ?</button>
      </div>
    );
  }
}

class Options extends React.Component{
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    alert("handleRemoveAll")
    console.log(this.props.options);
  }
  render() {
    return (
    <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(p){
    p.preventDefault();
    const option = p.target.elements.option.value.trim();
    if(option){
      alert(option);
      p.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
