// // console.log(document.title);

// // document.title = "Hello World"

// // DOM

// // let dom = document.getElementsByTagName("a")[0]

// // dom.style.backgroundColor = "purple"
// // dom.style.color = "white"
// // dom.style.padding = "10px"


// // document.getElementById("btt").addEventListener("click" , () => {
// //   window.scroll({
// //     top:0,
// //     left:0,
// //     behavior:"smooth" 
// //   })
// // })



// function getMovies(){
//   fetch(`https://jsonfakery.com/movies/paginated`)
//   .then(response => response.json())
//   .then(data => {
//     let datas = data.data
//     datas.map((m) => {
//       document.getElementById("name").innerText = m.original_title;
//       document.getElementById("overview").innerText = m.overview;
//       document.getElementById("img").src = m.poster_path;
//     })
//   })
//   .catch(error => console.error("Error fetching weather data:", error));
// }


// // document.getElementById("search").addEventListener("click", () => {
// //   let city = document.getElementById("cityInput").value;
// //   fetchWeather(city);
// // }).

// // getMovies()


// //https://api.openweathermap.org/data/2.5/weather?q=surat&appid=8d9f7c9674d1ea67b496323e419a1fd3&units=metric
// const uimaker = (data) => {
//     let roundTemp=Math.round(data.main.temp);
//     let temp = `
//         <p class="location"><i class="fa-solid fa-location-crosshairs"></i> ${data.name}</p>
//         <p class="temperature"><i class="fa-solid fa-cloud-sun-rain"></i> ${roundTemp}°C</p>
//         <div class="info">
//             <div>
//                 <h3><i class="fa-solid fa-wind"></i> Wind</h3>
//                 <p>${data.wind.speed}</p>
//             </div>
//             <div>
//                 <h3><i class="fa-solid fa-water"></i> Humidity</h3>
//                 <p>${data.main.humidity}%</p>
//             </div>
//         </div>
//         <div class="info">
//             <div>
//                 <h3><i class="fa-solid fa-cloud-meatball"></i> Clouds</h3>
//                 <p>${data.clouds.all}</p>
//             </div>
//             <div>
//                 <h3><i class="fa-solid fa-snowflake"></i> Weather</h3>
//                 <p>${data.weather[0].description}</p>
//             </div>
//         </div>
//         <div class="description">
//             This scene captures the calm serenity of a cool, overcast day with a gentle breeze, perfect for a peaceful outdoor escape.
//         </div>
//         `
//     document.getElementById("output").innerHTML = temp;
// };
// const getWeather = async (cityname) => {
//     let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=usa&appid=8d9f7c9674d1ea67b496323e419a1fd3&units=metric`);
//     let res = await req.json();
//     //console.log(res);
//     uimaker(res);
// };
// //weather by location 
// const getWeatherBylocation = async (lat,long) => {
//     let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8d9f7c9674d1ea67b496323e419a1fd3&units=metric`);
//     let res = await req.json();
//     //console.log(res);
//     uimaker(res);
// };
// const getlocation=()=>{
//     navigator.geolocation.getCurrentPosition((pos)=>{
//         console.log(pos.coords)
//         const lat=pos.coords.latitude;
//         const long=pos.coords.longitude;
//         getWeatherBylocation(lat,long)
//     }); 
// };
// getlocation();
// document.getElementById("search").addEventListener("keypress", (e) => {
//     if (e.key == "Enter") {
//         let cityname = e.target.value;
//         console.log(cityname);
//         getWeather(cityname);
//     }
// });



// Promises / async and await





// fetch api

// const connectApi = async() => {
//     let response = await fetch("https://jsonfakery.com/movies/paginated")
//     let data =await response.json()
//     // console.log(response);
    
//     console.log(data);
// }

// connectApi()



// let promise = new Promise(function(resolve , reject){
//     let workdone = false;

//     if(workdone){
//         resolve("Work complete successully...")
//     }else{
//         reject("Work Failed....")
//     }
// })

// promise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
    
// })


// let loadingData = new Promise(function(resolve  , reject){
//     setTimeout(() => {
//         resolve("Data Loaded Successfully........")
//     } , 5000)
// })

// loadingData.then((result) => {
//     console.log(result);
// })


// function checkNumber(num){
//     return new Promise(function(resolve , reject){
//         if(num % 2 === 0){
//             resolve("Number is Even.")
//         }else{
//             reject("Number is odd.")
//         }
//     })
// }

// checkNumber(10)
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })


// Promise Chaining

// let promise = new Promise(function(resolve , reject){
//     reject(10)
// })
// promise
// .then((result) => {
//     return result * 10
// })
// .then((num) => {
//     return num * 10
// })
// .then((result) => {
//     console.log(result); 
// })
// .catch((error) => {
//     console.log(error);
    
// })


// Order Process

// function placeOrder(){
//     return new Promise(function(resolve , reject){
//         setTimeout(() => {
//             resolve("Order Placed...")
//         } , 3000)
//     })
// }

// function prepareOrder(){
//     return new Promise(function(resolve , reject){
//         setTimeout(() => {
//             resolve("Order Prepared.....")
//         }, 3000);
//     })
// }

// function deliverOrder(){
//     return new Promise(function(resolve , reject){
//         setTimeout(() => {
//             resolve("Order Delivered......")
//         } , 5000)
//     })
// }


// placeOrder()
// .then((msg) => {
//     console.log(msg);
//     return prepareOrder()
// }).then((msg) => {
//     console.log(msg);
//     return deliverOrder()
// }).then((msg) => {
//     console.log(msg);
    
// })
