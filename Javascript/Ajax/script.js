// AJAX
// FETCH API
// AXIOS

// ajax - asynchronous javascript and xml

// structure


// function getData() {
//   var xhttp = new XMLHttpRequest();
  
//   xhttp.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//       console.log(this.response);
//     }else if(this.readyState === 4 && this.status === 404){
//       console.log("Page Not Found!!!"); 
//     }
//   }
  
//   xhttp.open("GET" , "https://dog.ceo/api/breeds/image/random" , true)
  
//   xhttp.send()
// }


// fetch api()


// function getDog(){
//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then((res) => {
//     res.json()
//   })
//   .then((data) => {
//     document.getElementById('dogImage').src = data.message
//   })
//   .finally(() => {
//     console.log("api call successfully.");
//   })
// }

// async function getDog(){
//   let res = await fetch('https://dog.ceo/api/breeds/image/random')
//   let data =await res.json()
//   document.getElementById("dogImage").src = data.message
// }

// corona api

async function getCoronaData(){

  let country = document.getElementById("country").value
  
  let res = await fetch(`https://disease.sh/v3/covid-19/countries/${country.toLowerCase()}`)
  let data = await res.json()
  console.log(data);
  
  document.getElementById("cases").innerText = "Cases : " + data.cases 
  document.getElementById("deaths").innerText = "Deaths : " + data.deaths 
  document.getElementById("recovered").innerText = "Recovered : " + data.recovered
}