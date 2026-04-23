// DOM in Javascript

// DOM Methods

// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.getElementsByName

let dom1 = document.getElementById("demo")

let dom2 = document.getElementsByClassName("box")[1]

// dom2.innerHTML = "<span>Hello World<span>"
// dom2.textContent = "<span>Hello World<span>"
// dom2.innerText = "<span>Hello World<span>"

// createElement

let newElement = document.createElement("marquee")
newElement.innerHTML = "<span>Hello , I am Fine...</span>"
let element = newElement.querySelector("span")

element.classList.add("boxes")

console.log(element);

document.body.appendChild(newElement)

let dom3 = document.getElementsByTagName("div")

console.log(dom3);

function hideElement(){
  document.getElementsByTagName("span")[0].style.display = "none"
}










