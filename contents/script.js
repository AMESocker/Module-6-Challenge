var locationBox = document.getElementById("city");  //set input variable from input element
var apiKey = config.SECRET_KEY;    //use to add to api key, can change
// var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+lItemStorage+'&appid='+apiKey;
// var forecastButton = $("#getForecastButton");
var Today = moment().format('dddd')
console.log('Assemble the minions!')

//----Button to get log and lat of location----No option to choose state----
$("#getForecastButton").on("click", function(){   //Listen for click                                
    localStorage.setItem("LocationItem", document.getElementById("city").value); //set value of input box
    lItemStorage = localStorage.getItem("LocationItem", document.getElementById("city").value);
    apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+lItemStorage+'&appid='+apiKey;
    locationBox.value;
    console.log("You've got to be pulling on my leg.");
    // console.log(locBoxValue);
    // console.log(apiUrl);
    console.log(locationBox.value)
    // document.getElementById("StartBox").style.display='none';
    // document.getElementById("5day").style.display='contents';
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
            console.log("Whoa, whoa, whoa! What was that?");
            console.log(data)
            console.log(data[0].lat);
            console.log(data[0].lon);
            latData = data[0].lat;
            lonData = data[0].lon;
            latLonUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+latData+'&lon='+lonData+'&appid='+apiKey+'&units=imperial';
            fetch(latLonUrl)
                .then(function(response){
                    return response.json();
                })
                .then(function (data){
                    console.log(data);
                    document.getElementById("cCity").innerText=data.city.name;
                    document.getElementById("cDate").innerText=Today;
                    document.getElementById("cIcon").innerHTML='<img src=http://openweathermap.org/img/wn/'+data.list[0].weather[0].icon+'.png>';
                    document.getElementById("cTemp").innerText='Temperature: '+data.list[0].main.temp+' F';
                    document.getElementById("cWindS").innerText='Wind Speed: '+data.list[0].wind.speed;
                    document.getElementById("cHum").innerText='Humidity: '+data.list[0].main.humidity+'%';
                })
            console.log("Cookie robots! I said cookie robots!")
            console.log(latLonUrl)
            //This would be better with a for loop. For now it works.
            

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


/* original 6-19
//Tests
// console.log(locBoxValue)
// console.log(apiKey)
// console.log(apiUrl)
// console.log(forecastButton.val())

//--Display start page--Combined to one page
// if(localStorage.getItem.value = true){
//     document.getElementById("StartBox").style.display='none';
//     document.getElementById("5day").style.display='contents';
// } else if(localStorage.getItem.value == false){
//     document.getElementById("StartBox").style.display='contents';
//     document.getElementById("5day").style.display='none';
// };
*/