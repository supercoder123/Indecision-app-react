console.log("this is utils.js");
export const square = x => {
  return x * x;
};

export const add = (x, y) => {
  return x + y;
};

export default (a, b) => {
  return a - b;
};

//export { square, add, subtract as default };
//default export subtract
