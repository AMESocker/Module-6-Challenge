var locationBox = document.getElementById("city");  //set input variable from input element
var apiKey = "6e276c3617ea3475d24d053e638998d7";    //use to add to api key, can change
// var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+lItemStorage+'&appid='+apiKey;
// var forecastButton = $("#getForecastButton");

//Tests
// console.log(locBoxValue)
// console.log(apiKey)
// console.log(apiUrl)
// console.log(forecastButton.val())

//--Display start page
// if(localStorage.getItem.value = true){
//     document.getElementById("StartBox").style.display='none';
//     document.getElementById("5day").style.display='contents';
// } else if(localStorage.getItem.value == false){
//     document.getElementById("StartBox").style.display='contents';
//     document.getElementById("5day").style.display='none';
// };

$("#getForecastButton").on("click", function(){   //Listen for click                                
    localStorage.setItem("LocationItem", document.getElementById("city").value); //set value of input box
    lItemStorage = localStorage.getItem("LocationItem", document.getElementById("city").value);
    apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+lItemStorage+'&appid='+apiKey;
    locationBox.value;
    console.log("You've got to be pulling on my leg.");
    // console.log(locBoxValue);
    console.log(apiUrl);
    console.log(locationBox.value)
    document.getElementById("StartBox").style.display='none';
    document.getElementById("5day").style.display='contents';
    // document.location = ("./pages/Locations.html");
    getLocalData();

}
);

function getLocalData(event) {
    
    fetch(apiUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log("Assemble the minions!");
        })
}
// function
//get local storage item

//get api data


// function nextPage (){   
//                           //puts input element into Local Storage
    
//     localStorage.setItem("LocationLS", $("#city").val());
//     localStorage.setItem("LocationL1", $("#Location").val());
    
    
//     console.log($('#city'));
//     console.log(apiUrl);
// };



// console.log($("#city"));

// console.log(nextPage)
// forecastButton.onclick = nextPage
// console.log(nextPage)


// forecastButton.addEventListener("click", console.log('Why can’t they call me the Adorable Snowman'));