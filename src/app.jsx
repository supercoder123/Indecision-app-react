class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer!</h2>
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
    <ol>
      <li>hello</li>
      <li>yo</li>
    </ol>
    );
  }
}

class AddOption extends React.Component{
  render() {
    return (
      <form action="onSubmit">
        <input type="text"></input>
        <button>Add Option</button>
      </form>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);


ReactDOM.render(jsx, document.getElementById('app'));
