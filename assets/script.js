console.log("hello")
var APIKey = '25659c002aa5786e2cc48bc9ba98e645';
var apiURL = "pro.openweathermap.org/data/2.5/forecast/hourly?";
//api.openweathermap.org/data/2.5/weather?q=austin&appid=25659c002aa5786e2cc48bc9ba98e645


var city ="austin"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


var weatherDisplay = document.querySelector(".weather-display");

fetch(queryURL)
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
    console.log(stateName.text);
    
    //Append to HTML doc
    weatherDisplay.appendChild(stateName);
    weatherDisplay.appendChild(stateTemp);
    weatherDisplay.appendChild(stateWind);
    weatherDisplay.appendChild(stateHumidity);
    weatherDisplay.appendChild(stateUVindex);




})




// submitformhandler
    //take search term, store in local storage, display on form 

//concat search term into url 
// pull data for that city via API
//display data to html
