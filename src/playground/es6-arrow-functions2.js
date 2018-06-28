//arguments object
const add = function functionName() {

}



//this keyword

const multiplier = {
  //numbers array
  //multiplyby - single numbers
  //
  numbers :[3,4,2,5,6,2,8],
  multiplyby:2,
  multiply:function(){
    return this.numbers.map((x) => x * this.multiplyby);
  }
};

console.log(multiplier.multiply());
