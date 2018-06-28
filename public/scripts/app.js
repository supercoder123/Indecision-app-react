"use strict";

//arguments object
var add = function functionName() {};

//this keyword

var multiplier = {
  //numbers array
  //multiplyby - single numbers
  //
  numbers: [3, 4, 2, 5, 6, 2, 8],
  multiplyby: 2,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (x) {
      return x * _this.multiplyby;
    });
  }
};

console.log(multiplier.multiply());
