// // texts Handeling in Javascript

// const quotes = [
//     {
//       id: 1,
//       text: "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
//       author: "Rumi",
//       likes:0,
//       year:1957,
//       tags:["happiness" , "action" , "mindset"]
//     },
//     {
//       id: 2,
//       text: "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
//       author: "Abdul Kalam",
//       likes:10,
//       year:1908,
//       tags:["begginning" , "action"]
//     },
//     {
//       id: 3,
//       text: "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
//       author: "Abdul Kalam",
//       likes:0,
//       year:1968,
//       tags:["success" , "value" , "purpose"]
//     },
//     {
//       id: 4,
//       text: "If You Can'T Make It Good, At Least Make It Look Good.",
//       author: "Bill Gates",
//       likes:89,
//       year:1989,
//       tags:["time" , "productivity" , "action"]
//     },
//     {
//       id: 5,
//       text: "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
//       author: "Rumi",
//       likes:101,
//       year:1947,
//       tags:["future" , "dreams" , "belief"]
//     },
//     {
//       id: 6,
//       text: "It is bad for a young man to sin; but it is worse for an old man to sin.",
//       author: "Abu Bakr (R.A)",
//       likes:877,
//       year:1905,
//       tags:["happiness" , "action" , "life"]
//     },
//     {
//       id: 7,
//       text: "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
//       author: "Albert Einstein",
//       likes:5,
//       year:1858,
//       tags:["wisdom" , "action" , "humor"]
//     },
//     {
//       id: 8,
//       text: "O man you are busy working for the world, and the world is busy trying to turn you out.",
//       author: "Abu Bakr (R.A)",
//       likes:89,
//       year:1948,
//       tags:["life" , "passion" , "success"]
//     },
//     {
//       id: 9,
//       text: "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
//       author: "Abdul Kalam",
//       likes:45,
//       year:2000,
//       tags:["action" , "mindset"]
//     },
//     {
//       id: 10,
//       text: "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
//       author: "Abraham Lincoln",
//       likes:1,
//       year:1789,
//       tags:["happiness" , "action"]
//     }
//   ]

//   // array length

//   console.log(quotes.length);
  

//   // Basic Loop Operation

//   // for(let i = 0; i < quotes.length; i++){
//   //   console.log(`${i + 1}. "${quotes[i].author} : ${quotes[i].text}"`);
//   // }

//   // for...of loop

//   // for(let quote of quotes){
//   //   console.log(`${quote.id}. "${quote.author} : ${quote.text}"`);
//   // }

//   // forEach 

//   // quotes.forEach((quote) =>  console.log(`${quote.id}. "${quote.author} : ${quote.text}"`))

//   // Filtering 


//   // let result = quotes.filter((quote) => quote.author == "Abdul Kalam").forEach((q) => console.log(q.text))
//   // console.log(result);


//   // let tags = quotes.filter((q) => q.tags === "success")

//   let result1 = quotes.filter(u => u.tags.includes("success"))

//   // console.log(tags);

//   console.log(result1);
  
// Object

// let profile = {
//   name:"Alex",
//   age:20,
//   gender:"Male"
// }
  
// console.log(profile.age);
// console.log(profile["gender"]);


// Date Object , NUmber Object , Map and Set Object

// constructure Method

// let today = new Date()

// console.log(today);

// let milliseconds = Date.now()

// console.log(milliseconds);

// Get  / Set

// console.log(today.getDate());
// console.log(today.getYear());
// console.log(today.getFullYear());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getMilliseconds()*10);
// console.log(Math.floor(Math.random()*10000));

// today.setFullYear("2025")
// today.setDate("20")
// today.setMonth("12")

// console.log(today);

// Math Object

// Math.PI

let math1 = Math.PI

console.log(math1);

// Math.floor()

let math2 = Math.floor(45.60)

console.log(math2);

// Math.ceil()

let math3 = Math.ceil(45.12)

console.log(math3);

// Math.abs()

let math4 = Math.abs(-50)

console.log(math4);

// Math.pow

let math5 = Math.pow(10 , 4)

console.log(math5);

// Math.sqrt()

let math6 = Math.sqrt(625)

console.log(math6);

// Math.sign()


// let math7 = Math.sign(155)

// console.log(math7);

// Math.sin()

// let result  = Math.sin(30 * 3.14 / 180)
// let result1  = Math.cos(60 * 3.14 / 180)

// console.log(result);
// console.log(result1);

// Math.min()
// Math.max()

// let max = Math.max(10 , 50  , 100 , 101 , 34 , 5)
// let min = Math.min(10 , 50  , 100 , 101 , 34 , 5)

// console.log(max);
// console.log(min);























