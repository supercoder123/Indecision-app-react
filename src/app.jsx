console.log("This is app.js : running")

const app = {
  title:"Indecision App",
  subtitle:"I am awesome",
  options:[]
}

const onFormSubmit = (p) =>{
  p.preventDefault();
  const option = p.target.elements.option.value;
  if(option){
    app.options.push(option);
    p.target.elements.option.value = " "
  }
  console.log("form submit " + app.options);
  renderFunction();
}

const appRoot = document.getElementById("app");

const buttonReset = () =>{
  app.options = [];
  renderFunction();
  console.log("button reset");
};

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderFunction = () =>{
  const template =
      <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "here are your option": "No Options"}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
      <button onClick={buttonReset}>Reset</button>
      <ol>
        {
          app.options.map((x) => {
            return <li key={x}>{x}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
     </div>

     ReactDOM.render(template,appRoot);
}
//JSX


renderFunction();
