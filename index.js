const apikey = "e3923521d6c7842f68e195e6e3a014ba";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const image = document.querySelector(".weather-icon");


async function cheackWeather(city){
    const response =await fetch(apiURL +city +`&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp )+ '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

    //image
    if(data.weather[0].main == "Clouds"){
       image.src = "images/clouds.png";
    } 
    else if (data.weather[0].main == "Clear"){
        image.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        image.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        image.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        image.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
 
}
searchBtn.addEventListener("click", ()=>{
    cheackWeather(searchBox.value);
})
