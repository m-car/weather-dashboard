// console.log("hello")
var APIKey = '25659c002aa5786e2cc48bc9ba98e645';
var apiURL = "pro.openweathermap.org/data/2.5/forecast/hourly?";
//api.openweathermap.org/data/2.5/weather?q=austin&appid=25659c002aa5786e2cc48bc9ba98e645
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


var weatherDisplay = document.querySelector(".weather-display");
var forecastCard = document.querySelector(".forecast-card");


// var citySearch = $("#fetch-button")

var city ="austin";
function getWeather(city){
    var currentWeather = 
    "http://api.openweathermap.org/data/2.5/weather?q=" + city + 
    "&units=imperial&appid=" + APIKey;
    var forecastFive = 
    "http://api.openweathermap.org/data/2.5/forecast?q=" + city + 
    "&units=imperial&appid=" + APIKey;
    
    //Main current weather display
    fetch(currentWeather)
    .then(function (response){
        // console.log(response);
        return response.json();
    })
    .then(function (data){
        console.log(data);
        //HTML Element Creation
        var stateName = document.createElement('h2');
        var stateTemp = document.createElement('p');
        var stateWind = document.createElement('p');
        var stateHumidity = document.createElement('p');
        var stateUVindex = document.createElement('p');
        
        //API Data Assignment
        stateName.textContent = data.name;
        stateTemp.textContent = "Temp:" + data.main.temp;
        stateWind.textContent = "Wind:" + data.wind.speed;
        stateHumidity.textContent = "Humidity:" + data.main.humidity;
        // stateUVindex.textContent = data.;
        
        //Append to HTML doc
        weatherDisplay.appendChild(stateName);
        weatherDisplay.appendChild(stateTemp);
        weatherDisplay.appendChild(stateWind);
        weatherDisplay.appendChild(stateHumidity);
        weatherDisplay.appendChild(stateUVindex);
    }),
    // 5 Day Forecast Display
    fetch(forecastFive)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        //HTML Element Creation
        for(var i = 1; i <6; i++){
            var stateName = document.createElement('h2');
            var stateTemp = document.createElement('p');
            var stateWind = document.createElement('p');
            var stateHumidity = document.createElement('p');
            var stateUVindex = document.createElement('p');
            
            //API Data Assignment
            stateName.textContent = "DATE :"+ i; //"data.city.name";
            stateTemp.textContent = "Temp:" + data.list[i].main.temp;
            stateWind.textContent = "Wind:" + data.list[i].wind.speed;
            stateHumidity.textContent = "Humidity:" + data.list[i].main.humidity;
            // stateUVindex.textContent = data.;
            
            //Append to HTML doc
            forecastCard.appendChild(stateName);
            forecastCard.appendChild(stateTemp);
            forecastCard.appendChild(stateWind);
            forecastCard.appendChild(stateHumidity);
            forecastCard.appendChild(stateUVindex);
        }
    })
}

getWeather(city);



function logSubmit(event){
    console.log("submit ok");
    // event.preventDefault();
}
var form = document.getElementById("form");
var log = document.getElementById("log");
form.addEventListener('click', logSubmit());

// submitformhandler
//take search term, store in local storage, display on form 




