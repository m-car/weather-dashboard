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
        // var stateName = document.createElement('h2');
        // var stateTemp = document.createElement('p');
        // var stateWind = document.createElement('p');
        // var stateHumidity = document.createElement('p');
        // var stateUVindex = document.createElement('p');
        $(".city").html("<h1>" + data.name + " Weather Details</h1>")
        $(".temp").text("Temp:" + data.main.temp + " Degrees F");
        $(".wind").text("Wind:" + data.wind.speed + " MPH");
        $(".humidity").text("Humidity:" + data.main.humidity + "%");
        //API Data Assignment
        // stateName.textContent = data.name;
        // stateTemp.textContent = "Temp:" + data.main.temp;
        // stateWind.textContent = "Wind:" + data.wind.speed;
        // stateHumidity.textContent = "Humidity:" + data.main.humidity;
        // stateUVindex.textContent = data.;
        
        //Append to HTML doc
        // weatherDisplay.appendChild(stateName);
        // weatherDisplay.appendChild(stateTemp);
        // weatherDisplay.appendChild(stateWind);
        // weatherDisplay.appendChild(stateHumidity);
        // weatherDisplay.appendChild(stateUVindex);
    }),
    // 5 Day Forecast Display
    fetch(forecastFive)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        //HTML Element Creation
        
        $(".city1").html("<h1> Date </h1>");
        $(".temp1").text("Temp:" + data.list[1].main.temp + " Degrees F");
        $(".wind1").text("Wind:" + data.list[1].wind.speed + " MPH");
        $(".humidity1").text("Humidity:" + data.list[1].main.humidity + "%");

        $(".city2").html("<h1> Date </h1>");
        $(".temp2").text("Temp:" + data.list[2].main.temp + " Degrees F");
        $(".wind2").text("Wind:" + data.list[2].wind.speed + " MPH");
        $(".humidity2").text("Humidity:" + data.list[2].main.humidity + "%");

        $(".city3").html("<h1> Date </h1>");
        $(".temp3").text("Temp:" + data.list[3].main.temp + " Degrees F");
        $(".wind3").text("Wind:" + data.list[3].wind.speed + " MPH");
        $(".humidity3").text("Humidity:" + data.list[3].main.humidity + "%");

        $(".city4").html("<h1> Date </h1>");
        $(".temp4").text("Temp:" + data.list[4].main.temp + " Degrees F");
        $(".wind4").text("Wind:" + data.list[4].wind.speed + " MPH");
        $(".humidity4").text("Humidity:" + data.list[4].main.humidity + "%");

        $(".city5").html("<h1> Date </h1>");
        $(".temp5").text("Temp:" + data.list[5].main.temp + " Degrees F");
        $(".wind5").text("Wind:" + data.list[5].wind.speed + " MPH");
        $(".humidity5").text("Humidity:" + data.list[5].main.humidity + "%");
        //     var stateName = document.createElement('h2');
        //     var stateTemp = document.createElement('p');
        //     var stateWind = document.createElement('p');
        //     var stateHumidity = document.createElement('p');
        //     var stateUVindex = document.createElement('p');
            
        //     //API Data Assignment
        //     stateName.textContent = "DATE :"+ i; //"data.city.name";
        //     stateTemp.textContent = "Temp:" + data.list[i].main.temp;
        //     stateWind.textContent = "Wind:" + data.list[i].wind.speed;
        //     stateHumidity.textContent = "Humidity:" + data.list[i].main.humidity;
        //     // stateUVindex.textContent = data.;
            
        //     //Append to HTML doc
        //     forecastCard.appendChild(stateName);
        //     forecastCard.appendChild(stateTemp);
        //     forecastCard.appendChild(stateWind);
        //     forecastCard.appendChild(stateHumidity);
        //     forecastCard.appendChild(stateUVindex);
        
    })
    
}

// getWeather(city);


var austinButton = $("#austin");
var chicagoButton = $("#chicago");
var newYorkButton = $("#new-york");
var orlandoButton = $("#orlando");



austinButton.on('click', function(){
    // weatherDisplay.remove('p');
    getWeather("austin")
})
chicagoButton.on('click', function(){
    getWeather("chicago")
 })
 newYorkButton.on('click', function(){
    getWeather("new+york")
 })
 orlandoButton.on('click', function(){
    getWeather("orlando")
 })
//  chicagoButton.on('click', function(){
//     getWeather("chicago")
//  })

var form = $("#form");
var log = document.getElementById("log");
form.on('submit', function(event){
    event.preventDefault();
    console.log('submit ok')
    console.log(form.city.value())
});

// submitformhandler
//take search term, store in local storage, display on form 




