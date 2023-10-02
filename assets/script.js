//creating a website using a weather API as shown in the mock up.
// creating variables?
// creating a fetch call?
// search via city which is then added to the search history
// presenting a 5 day weather forcast
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

var APIkey = "53c528a6b4d5b8bb69ae8c13e95adfc2"
var userInput = document.getElementById("userInput")
var submitButton = document.getElementById("submitButton")


var todayPart = document.querySelector('#todday');



submitButton.addEventListener("click", function(){
    console.log(userInput.value)
    getCoordinates(userInput.value)
})

function getWeather(lat , lon){
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +  "&units=imperial&appid=" + APIkey
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}
//had a tutor help me with this assignment but wasnt able to complete,
//  this is what we went over in our session lines 35-47
function renderCurrentWeather(city, weather){
    var tempNow = weather.main.temp;
    var tempPart = document.createElement('p')
    card.append(cardBody);
    
    //add Card Title, weather icon, humidity, wind speed
    card.setAttribute('class', 'h3')
    cardBody.append(tempPart);
    tempPart.setAttribute('class', 'card-text');
    tempPart.textContent = 'Temp: $(tempNow)°F';
    //<p>Temp: ${data.daily[i].temp.day}F</p>
    todayContainer.innerHTML ='';
    todayPart.append(card);
}

function getCoordinates(cityName){
    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIkey
    console.log(url)
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data[0].lat)
        getWeather(data[0].lat , data[0].lon)
    })
}