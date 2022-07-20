// Upon search pull api with user parameter
// function to store searched api link in local storage
// add button to library with this name in local storage
// main function will trigger on search and(function1) ->
// > create button and store in local (function2)
// > create current day object and add it to dom to be displayed (function3)
// > create 5 day forecast in second element add them to dom to be displayed (function 4 + 5?)

// Global api variables
var apiKey = ""
var api = ""



// listener main function to user data submit
$(".button").on("submit", "button", function(){
    // user input variable
    var city = input.value
    // dynamically generated api link
    var apiCity = api + city + apiKey
    // obj from API data base for reference
    var apiObj = fetch(apiCity);
    
    // store link to couple with new button so user can conveniently load again
    var storedCity = saveLocally(apiObj);
    createButton(city);

    // create current day condition information and append them to DOM to be displayed
    CreateTodaysForecast(apiObj);
    
    // create 5 elements with weather data on today and next 4 days
    Create5DayForecast();
})

// listener for dynamically created buttons
$(".parent").on("click", "button", function() {
    CreateTodaysForecast();
    Create5DayForecast();
})



// load previously searched cities from local storage
loadCities();
