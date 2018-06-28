console.log("This is app.js : running")

const app = {
  title:"Indecision App",
  subtitle:"I am awesome",
  options:['One','Two']
}


//JSX
const template =
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>"here are your options:"{app.options}</p>:<p>"No Options"</p>}
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
   </div>

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

const addOne = (x) => {
  console.log("addOne" + x);
}
let count = 0;
const templateTwo =                       //use className for jsx
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={() => {
        console.log("minusOne");
    }}>-1</button>
  <button onClick={() => {
        console.log("reset");
  }}>reset</button>
  </div>

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo,appRoot)
