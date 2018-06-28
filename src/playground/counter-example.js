
const user = {
  name:"Ashley",
  age:22,
  loc:"USA"
}

function getLocation(location){
  if(location){
    return <p>Location: {location}</p>;
  }else{
  return 'Unknown';
  }
}

let count = 0;

const appRoot = document.getElementById("app");

const renderFunction = () => {
  const templateTwo =                       //use className for jsx
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {
            console.log("addOne");
            count++;
            renderFunction();
            }}>+1</button>
      <button onClick={() => {
            count--;
            renderFunction();
            console.log("minusOne");
            }}>-1</button>
      <button onClick={() => {
            count = 0;
            renderFunction();
            console.log("reset");
            }}>reset</button>
    </div>

    ReactDOM.render(templateTwo,appRoot)

}

renderFunction();
