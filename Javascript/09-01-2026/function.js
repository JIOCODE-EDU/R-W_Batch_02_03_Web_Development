// Basic Function
// Arrow Function
// IIFE Function
// Callback Function

// Anonymous Function

// setTimeout(function(){
//   console.log("Hello");
// } , 5000)

// Named Function Expression

// const fact = function factorial(n){
//   return n <= 1 ? 1 : n * factorial(n - 1)
// }

// console.log(fact(5));

// Arrow Function

// const names = () => {
//   console.log("Hello");
// }

// names()

// (() => {
//   console.log("Javascript");
// })()


// Higher-Order Function (HOF)

// function multi(n){
//   return function(k){
//     return k * n
//   }
// }

// const double = multi(10)

// console.log(double("20"));


// object with functions

// function User(name){
//   this.name = name
// }

// const result = new User("Zeel")

// console.log(result.name);

// const Profile = {
//   name:"Akash"
// }

// console.log(Profile.name);


// Method Object Function


// const User = {
//   name:"Alice",
//   result(){
//     return `Hello , ${this.name}`
//   }
// }

// console.log(User.result());

// Generator Function

// function* count(){
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   return "Finished"
// }

// // console.log(count());

// const gen = count()

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


// Async Function

// async function name() {
//   return "Data"
// }

// const func = async() => {
//   await()
// }

// console.log(name());

// Pure Function

// function sum(a , b){
//   return a += b
// }

// console.log(sum(10 , 10));
// console.log(sum(20 , 20));

// Impure Function

// let count = 0;

// function addCount(x){
//   count += x
// }

// addCount(10)
// addCount(20)
// addCount(30)

// console.log(count);

// default parameter function

// function result(name = "Zeel"){
//   console.log(`${name}`);
// }

// result()
// result()
// result()
// result()
// result()


// Function with Destructured Parameter

// function display({name , age}){
//   console.log(name , age)
// }

// display({name:"Sumit" , age:24})

// Bound Function

// const user = {
//   name:"Alice"
// }

// function greet(){
//   console.log(this.name);
// }

// const result = greet.bind(user)

// result()

// Closure Function

// function counter(){
//   let count = 0;
//   return function(){
//     return ++count;
//   }
// }

// const increment = counter()

// console.log(increment());
// console.log(increment());
// console.log(increment());


// What is array?

{
  let array = new Array(100)

  array[0] = 10
  array[1] = 10
  array[2] = 10

  array.length = 10

  console.log(array);
  
  console.log(array.length);

  console.log(Object.keys(array));

  console.log(Object.values(array));

  let result = array.entries()

  console.log(result.next().value);
  console.log(result.next().value);
  console.log(result.next().value);

}

{
  let num = [10 , 20 , 30 , 40 , 50 , 60]

  let result = num.at(-7)

  console.log(result);
}


















