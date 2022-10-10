var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';
var apiKey = "6e276c3617ea3475d24d053e638998d7";
var locationBox = $("#Location").val();
var forecastButton = document.getElementById("getForecastButton");

forecastButton.addEventListener("click",nextPage);

function nextPage (){                                   //puts input element into Local Storage
    document.location = ("./pages/Locations.html");
    localStorage.setItem("LocationLS", $("#Location").val());
    localStorage.setItem("LocationL1", $("#Location").val());
    
    console.log("Hello")
};



console.log($("#Location").val());

// console.log(nextPage)
// forecastButton.onclick = nextPage
// console.log(nextPage)


// forecastButton.addEventListener("click", console.log('Why can’t they call me the Adorable Snowman'));