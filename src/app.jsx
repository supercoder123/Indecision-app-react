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

const name = "Ashley Fernandes"
const age = "2"
const loc = "usa"
const templateTwo =
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >= 18 )&& <p>Age: {user.age}</p>}
    {getLocation(user.loc)}
  </div>

const appRoot = document.getElementById("app");

ReactDOM.render(template,appRoot)
