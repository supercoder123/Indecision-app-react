class Counter extends React.Component {
    let count = 0;
    constructor(props){
      super(props);
      this.handleAddOne = this.handleAddOne.bind(props);
      this.handleMinusOne = this.handleMinusOne.bind(props);
      this.handleReset = this.handleReset.bind(props);
    }
    handleAddOne(){
      count ++;
    }
    handleMinusOne(){
      count --;
    }
    handleReset(){
      count = 0 ;
    }
    render() {
        return (
          <div>
            <h1>Count: </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
          </div>
      );
    }
}
ReactDOM.render(<Counter />,document.getElementById('app'));
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
