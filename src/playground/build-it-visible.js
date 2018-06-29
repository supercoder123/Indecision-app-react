let flag = true ;
const appRoot = document.getElementById("app")

const renderFunction = () => {
  const header =
              <div>
              <h1>Visibility Toggle</h1>
              <button onClick={toggle}>{flag?"Show text":"Hide text"}</button>
              <p hidden={flag}>This is a piece of text</p>
              </div>
              
              ReactDOM.render(header,appRoot)

};
const toggle = () =>{
      flag = !flag;
      renderFunction();
}
renderFunction();
