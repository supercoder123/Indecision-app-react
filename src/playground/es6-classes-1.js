class Person {
  constructor(name = "Anonymous",age=0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    //return "hii how are you? " + this.name;
    return `Hi, I am ${this.name} !!`
   }
  getDescription(){
    return `${this.name} is ${this.age} years old.`;
  }
}

const me = new Person("Ashley Fernandes",22);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
