// const square = (x) => {          //long syntax
//   return x * x;
// };
// console.log(square(9));
//
// const squareNew = (x) => x*x;     //short syntax
//
// console.log(squareNew(6));

let name  = "Ashley Fernandes"

const getFirstName = (x) =>{
  let firstName = x.split(' ')[0];
  return firstName;
}

console.log(getFirstName(name));

const getFirstNameShort = (x) => x.split(' ')[0];
console.log(getFirstNameShort(name));
