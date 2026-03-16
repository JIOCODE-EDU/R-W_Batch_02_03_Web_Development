// console.log(document.title);

// document.title = "Hello World"

// DOM

// let dom = document.getElementsByTagName("a")[0]

// dom.style.backgroundColor = "purple"
// dom.style.color = "white"
// dom.style.padding = "10px"


// document.getElementById("btt").addEventListener("click" , () => {
//   window.scroll({
//     top:0,
//     left:0,
//     behavior:"smooth" 
//   })
// })



function getMovies(){
  fetch(`https://jsonfakery.com/movies/paginated`)
  .then(response => response.json())
  .then(data => {
    let datas = data.data
    datas.map((m) => {
      document.getElementById("name").innerText = m.original_title;
      document.getElementById("overview").innerText = m.overview;
      document.getElementById("img").src = m.poster_path;
    })
  })
  .catch(error => console.error("Error fetching weather data:", error));
}


// document.getElementById("search").addEventListener("click", () => {
//   let city = document.getElementById("cityInput").value;
//   fetchWeather(city);
// }).

// getMovies()


//https://api.openweathermap.org/data/2.5/weather?q=surat&appid=8d9f7c9674d1ea67b496323e419a1fd3&units=metric
const uimaker = (data) => {
    let roundTemp=Math.round(data.main.temp);
    let temp = `
        <p class="location"><i class="fa-solid fa-location-crosshairs"></i> ${data.name}</p>
        <p class="temperature"><i class="fa-solid fa-cloud-sun-rain"></i> ${roundTemp}°C</p>
        <div class="info">
            <div>
                <h3><i class="fa-solid fa-wind"></i> Wind</h3>
                <p>${data.wind.speed}</p>
            </div>
            <div>
                <h3><i class="fa-solid fa-water"></i> Humidity</h3>
                <p>${data.main.humidity}%</p>
            </div>
        </div>
        <div class="info">
            <div>
                <h3><i class="fa-solid fa-cloud-meatball"></i> Clouds</h3>
                <p>${data.clouds.all}</p>
            </div>
            <div>
                <h3><i class="fa-solid fa-snowflake"></i> Weather</h3>
                <p>${data.weather[0].description}</p>
            </div>
        </div>
        <div class="description">
            This scene captures the calm serenity of a cool, overcast day with a gentle breeze, perfect for a peaceful outdoor escape.
        </div>
        `
    document.getElementById("output").innerHTML = temp;
};
const getWeather = async (cityname) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=usa&appid=8d9f7c9674d1ea67b496323e419a1fd3&units=metric`);
    let res = await req.json();
    //console.log(res);
    uimaker(res);
};
//weather by location 
const getWeatherBylocation = async (lat,long) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8d9f7c9674d1ea67b496323e419a1fd3&units=metric`);
    let res = await req.json();
    //console.log(res);
    uimaker(res);
};
const getlocation=()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos.coords)
        const lat=pos.coords.latitude;
        const long=pos.coords.longitude;
        getWeatherBylocation(lat,long)
    }); 
};
getlocation();
document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let cityname = e.target.value;
        console.log(cityname);
        getWeather(cityname);
    }
});

