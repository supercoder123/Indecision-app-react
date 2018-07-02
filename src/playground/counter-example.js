class Counter extends React.Component {
    constructor(props){
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count:props.count
      }
    }
    handleAddOne(){
      this.setState((prevState) => {
          return {
            count: prevState.count + 1
          };
      });
    }
    handleMinusOne(){
      this.setState((prevState) => {
          return {
            count: prevState.count - 1
          };
      });
    }
    handleReset(){
      this.setState(() => {
          return {
            count:0
          };
      });
    }
    render() {
        return (
          <div>
            <h1>Count:{this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
          </div>
      );
    }
}

Counter.defaultProps = {
  count:0
};
ReactDOM.render(<Counter count={0}/>,document.getElementById('app'));
//
// const user = {
//   name:"Ashley",
//   age:22,
//   loc:"USA"
// }
//
// function getLocation(location){
//   if(location){
//     return <p>Location: {location}</p>;
//   }else{
//   return 'Unknown';
//   }
// }
//
// let count = 0;
//
// const appRoot = document.getElementById("app");
//
// const renderFunction = () => {
//   const templateTwo =                       //use className for jsx
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => {
//             console.log("addOne");
//             count++;
//             renderFunction();
//             }}>+1</button>
//       <button onClick={() => {
//             count--;
//             renderFunction();
//             console.log("minusOne");
//             }}>-1</button>
//       <button onClick={() => {
//             count = 0;
//             renderFunction();
//             console.log("reset");
//             }}>reset</button>
//     </div>
//
//     ReactDOM.render(templateTwo,appRoot)
//
// }
//
// renderFunction();
