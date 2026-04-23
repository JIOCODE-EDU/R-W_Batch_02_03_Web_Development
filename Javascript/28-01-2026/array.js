// Array With Functions Push ,Pop, shift, upshifts, Splice string function
// Push ,Pop, shift, upshifts, map ,filter, foreach, indexof, findindex ,includes

import { products } from "./data.js";

// {
//   let arr = [1, 2, 3, 4, 5];

//   console.log(arr.length);

//   arr[5] = 6;

//   arr.push(7)
  
//   arr.push(8)

//   arr.pop()
//   arr.pop()
//   arr.pop()

//   arr.shift()
//   arr.shift()

//   arr.unshift(2)
//   arr.unshift(1)

//   console.log(arr.length);

//   console.log(arr);
// }

{

//   let num = [10 , 20 , 45 , 89 , 21 , 56]

//  let result = num.filter(val => val > 50)

//  console.log(result);
 

  // num.forEach((val) => console.log(val * 2))
}

{
  //create Element

  const Element = document.createElement("li")

  Element.textContent = "Hello World"

  console.log(Element);

  document.body.appendChild(Element)
  
}

{
    products.map((val) => {
      document.getElementById("demo").innerHTML = `
        <h1>${val.title}</h1>
      `
    })
}