const weatherApi = {
    key: "392c863666b5c2e5344ffca5fbbd84e1",
    url: "https://api.openweathermap.org/data/2.5/weather"
}

const cityInputBox = document.getElementById('City-Input-Box');

cityInputBox.addEventListener('keypress',(event)=> {

     if (event.keyCode == 13) {
        console.log(cityInputBox.value);
        getWeatherInfo(cityInputBox.value);
     }
    
});

function getWeatherInfo (city) {
    fetch(`${weatherApi.url}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }) 
    .then(weatherReport);
}

function weatherReport (weather) {
console.log(weather);

let cityInfo = document.getElementById('City-Info');
cityInfo.innerText = `${weather.name},${weather.sys.country}`;

let temperature = document.getElementById('Temp');
temperature.innerHTML = `${weather.main.temp}&deg;C`;

let minMax = document.getElementById('Min-Max');
minMax.innerHTML =`${weather.main.temp_min}&deg;C,${weather.main.temp_max}&deg;C`;

let weatherType = document.getElementById('Weather');
weatherType.innerText =`${weather.weather[0].main}`;

let date = document.getElementById('Date');
let todayDate = new Date ();
date.innerText = getNewDate(todayDate);

}

function getNewDate(newDate) {

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
    let months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];

    let year    =  newDate.getFullYear();
    let month  =  months[newDate.getMonth()];
    let day    =  days[newDate.getDay()];
    let date    = newDate.getDate(); 

    return `${date}, ${month}, ${day}, ${year}`;

}