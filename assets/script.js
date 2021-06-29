console.log("hello")
var APIKey = '25659c002aa5786e2cc48bc9ba98e645';
var apiURL = "pro.openweathermap.org/data/2.5/forecast/hourly?";
//api.openweathermap.org/data/2.5/weather?q=austin&appid=25659c002aa5786e2cc48bc9ba98e645


var city ="austin"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
.then(function (response){
    return response.json();
})
.then(function (data){
    console.log(data);
})




// submitformhandler
    //take search term, store in local storage, display on form 

//concat search term into url 
// pull data for that city via API
//display data to html
