console.log("This is app.js : running")

//JSX
var template =
    <div>
    <h1>Hello World</h1>
    <p>Everything works now</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
   </div>


var templateTwo =
  <div>
    <h1>Ashley Fernandes</h1>
    <p>Age: 22</p>
    <p>Location : Mumbai</p>
  </div>

var appRoot = document.getElementById("app");
ReactDOM.render(template,appRoot)

ReactDOM.render(templateTwo,appRoot)
