// let flag = true ;
// const appRoot = document.getElementById("app")
//
// const renderFunction = () => {
//   const header =
//               <div>
//               <h1>Visibility Toggle</h1>
//               <button onClick={toggle}>{flag?"Show text":"Hide text"}</button>
//               <p hidden={flag}>This is a piece of text</p>
//               </div>
//
//               ReactDOM.render(header,appRoot)
//
// };
// const toggle = () =>{
//       flag = !flag;
//       renderFunction();
// }
// renderFunction();

class Visibility extends React.Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      flag:true
    }
  }
  toggle(){

    this.setState((prevState) => {
    return{
        flag: !prevState.flag
    }
    });
  }
    render() {
        return (
          <div>
            <h1>Visibility Toggle</h1>
               <button onClick={this.toggle}>{this.state.flag?"Show text":"Hide text"}</button>
               <p hidden={this.state.flag}>This is a piece of text</p>
          </div>
      );
    }
}

ReactDOM.render(<Visibility />,document.getElementById("app"));
