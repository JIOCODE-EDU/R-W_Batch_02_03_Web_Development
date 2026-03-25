// Javascript Object Manipulation Utilities

let obj = {
  name: "Paras",
  age: 25,
};

console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj.name);
console.log(obj.age);

let newObj = {};
let newobj = new Object();

console.log(newObj);

console.log(newobj);

// assign

{
  let obj1 = { first: 1, second: 2 };
  let obj2 = { third: 3, forth: 4 };

  let result = Object.assign(obj1, obj2);

  console.log(result);

  console.log(obj1);
}

// create

{
  let profile = {
    isAdd: true,
    age: 10,
    print() {
      console.log(`This person age is  ${this.age} years`);
    },
  };

  console.log(profile.print());

  const result = Object.create(profile);

  result.age = 20;

  result.print();
}

// {
//   let object = {};

//   Object.defineProperties(object, {
//     property1: {
//       value: 42,
//       writable: true,
//     },
//     property2: {
//       value: 50,
//       writable: false,
//     },
//   });

//   console.log(object.property1.value);

//   console.log(object.property1);
// }

// {
//   let object = {};

//   Object.defineProperty(object, "joo", {
//     value: 42,
//     writable: false,
//   });

//   object.joo = 80;

//   console.log(object.joo);
// }

{

  let profile = {
    isAdd: true,
    age: 10,
    print() {
      console.log(`This person age is  ${this.age} years`);
    },
  };

  Object.seal(profile)

  let result = Object.isFrozen(profile)

  profile.name = "Rajesh"
  profile.age = 20

  console.log(profile);

  console.log(result);
  
  
}
