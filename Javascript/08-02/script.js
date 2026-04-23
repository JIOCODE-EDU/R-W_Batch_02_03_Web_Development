// Timing Function

// setTimeout()
// setInterval()
// clearTimeout()
// clearInterval()

// What is sync Javascript?

// console.log("Hello World");
// console.log("123");
// function greek(){
//   console.log("Javascript ES6");
// }
// document.getElementById("demo").textContent = "Hello Javascript"
// greek();
// console.log("sync javascript");

// What is async Javascript?

// setTimeout(() => {
//   console.log("Hello World");
// } , 5000)

// setTimeout(() => {
//   console.log("123");
// } , 2000)

// setTimeout(() => {
//   function greek(){
//     console.log("Javascript ES6");
//   }
//   greek()
// } , 8000)

// setTimeout(() => {
//   document.getElementById("demo").textContent = "Hello Javascript"
// } , 6000)

// console.log("sync javascript");

// setTimeout() - clearTimeout()

// let count = 0;

// function func1(){
//   let timeoutID1 = setTimeout(() => {
//     console.log("Hello World 1!!");
//   } , 1000)
// }

// function func2(){
//   let timeoutID2 = setTimeout(() => {
//     console.log("Hello World 2!!");
//   } , 1000)
//   if(count > 5){
//     clearTimeout(timeoutID2)
//   }
// }

// function increment(){
//   console.log("function call..");
//   count += 1
//   if(count < 5){
//     func1()
//   }else{
//     func2()
//   }
//   console.log("Count" , count);
// }

// setInterval()

// let count = 0;

// let intervalID = setInterval(function incre(){
//   count+=1;
//   console.log("Count" , count);
//   if(count >= 10){
//     clearInterval(intervalID)
//   }
// }, 1000)

// factory process

// setTimeout(() => {
//   console.log("1. Cultivation & Harvesting");
//   setTimeout(() => {
//     console.log("2. Processing");
//     setTimeout(() => {
//       console.log("3. Drying");
//       setTimeout(() => {
//         console.log("4. Milling & Sorting");
//         setTimeout(() => {
//           console.log("5. Roasting");
//           setTimeout(() => {
//             console.log("6. Grinding");
//             setTimeout(() => {
//               console.log("7. Measuring");
//               setTimeout(() => {
//                 console.log("8. Heating Water");
//                 setTimeout(() => {
//                   console.log("9. Brewing/Extraction");
//                   setTimeout(() => {
//                     console.log(
//                       "10. Pouring immediately to enjoy fresh Coffee. ",
//                     );
//                   }, 5000);
//                 }, 5000);
//               }, 2000);
//             }, 3000);
//           }, 6000);
//         }, 1000);
//       }, 5000);
//     }, 1000);
//   }, 3000);
// }, 2000);

// Promises in Javascript
// {
//   const promise = new Promise((resolve , reject) => {})
  
//   promise.then()
  
//   new Promise((resolve , reject) => {
  
//   }).then()
// }


// const promise = new Promise((resolve , reject) => {
//   setTimeout(() => {
//     resolve(console.log("Task 1 is Completed!"))
//   } , 5000)
// }).then(() => {
//   console.log("Task 2 start");
// }).then(() => {
//   console.log("Task 3 start");
// }).catch((err) => {
//   console.log(err);
// }).finally(() => {
//   console.log("Final work completed.");
// })


function API1(){
  setTimeout(() => {
    const res = fetch("https://dummyjson.com/product").then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  } , 5000)
}

function API2(){
  const res = fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
    return res.json()
  }).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  })
}

async function APICALL() {

  let result = await Promise.all([
    API1(),
    API2(),
  ])

  console.log(result[0] , result[1]);
}

APICALL()




