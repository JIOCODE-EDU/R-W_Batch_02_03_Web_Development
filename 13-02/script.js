
// sync (by default) and async javascript

// DOM in Javascript

// DOM Methods

// document.getElementByID()


{
  // let dom = document.getElementById("demo").innerHTML = "Hello World!"

  // console.log(dom);
}

// document.getElementByClassName()

{
  let dom = document.getElementsByClassName("box")

  console.log(dom);
}

// {
//   let dom = document.getElementsByClassName("maindiv")[0]

//   dom.style.backgroundColor = "red";
// }

// {
//   let dom = document.getElementsByTagName("div")[0]

//   dom.style.backgroundColor = "green" 
// }

// {
//   let dom = document.getElementById("box")

//   dom.style.backgroundColor = "red"
// }

{
  let dom = document.getElementsByTagName("span")[1]

  dom.style.backgroundColor = "blue"

  console.log(dom); 
}

// querySelector
// querySelectorAll

{
  for(let i = 0; i <= 1; i++){
    let dom = document.querySelectorAll("span")[i]
    dom.style.backgroundColor = "orange"
    console.log(dom);
  }
}


// Quiz App 

// Questions(5)
// Options
// Css
// Animation
// Reminder Timing
// Pagination
// Conditional Style
// Marks Calculation
// Result Components
// Progress Bar


















