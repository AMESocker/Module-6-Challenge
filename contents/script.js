//var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// api Key - 6e276c3617ea3475d24d053e638998d7
var forecastButton = document.getElementById("getForecastButton")
var locationBox = document.getElementById("Location")
// document.getElementById("getForecastButton").addEventListener("click",console.log('Why cant they call me the Adorable Snowman'));
// var resultsPage = ;
function nextPage (){
    localStorage.setItem("LocationLS", locationBox.val());
    console.log('Do I look abominable to you?');
    console.log();
};
// forecastButton.onclick = nextPage
console.log(nextPage)


// forecastButton.addEventListener("click", console.log('Why can’t they call me the Adorable Snowman'));