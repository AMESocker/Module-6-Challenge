var locationBox = document.getElementById("city").value;  //set input variable from input element
var apiKey = "6e276c3617ea3475d24d053e638998d7";    //use to add to api key, can change
var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+locationBox+'&appid='+apiKey;
var forecastButton = document.getElementById("getForecastButton");
//Tests
console.log(locationBox)
console.log(apiKey)
console.log(apiUrl)
// console.log(forecastButton.val())

$("#getForecastButton").on("click",function(){
    localStorage.setItem("LocationLS", $("#city").val());
    console.log("You've got to be pulling on my leg.");
    console.log(locationBox)
    console.log(apiUrl);
    // document.location = ("./pages/Locations.html");
}
);

// function nextPage (){   
//                           //puts input element into Local Storage
    
//     localStorage.setItem("LocationLS", $("#city").val());
//     localStorage.setItem("LocationL1", $("#Location").val());
    
//     console.log("Assemble the minions!");
//     console.log($('#city'));
//     console.log(apiUrl);
// };



// console.log($("#city"));

// console.log(nextPage)
// forecastButton.onclick = nextPage
// console.log(nextPage)


// forecastButton.addEventListener("click", console.log('Why can’t they call me the Adorable Snowman'));