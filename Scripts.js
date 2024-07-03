
const apiKey="77004faa49cb81065a7e1511ef1d2546"//api key
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=" //the url 
const SearchBox=document.querySelector(".search input");//selecting element
const Searchbtn=document.querySelector(".search button");//selecting element
const WeatherIcon=document.querySelector(".weather-icon");//selecting element
const fore=document.querySelector(".forecast");//selecting element
/***********************************************************asyng Function to show information********************************************************* */
async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apiKey}`)
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    var data= await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp-273.15)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed+"km//hr";

    if(data.weather[0].main=="Clouds"){

        WeatherIcon.src="Resources/images/clouds.png";
    }
   else if(data.weather[0].main=="Clear"){

        WeatherIcon.src="Resources/images/clear.png";
    }
   else if(data.weather[0].main=="Rain"){

        WeatherIcon.src="Resources/images/rain.png";
    }
   else if(data.weather[0].main=="Drizzle"){

        WeatherIcon.src="Resources/images/drizzle.png";
    }
   else if(data.weather[0].main=="Mist"){

        WeatherIcon.src="Resources/images/mist.png";
    }
 
    fore.style.display="block"

}
/*********************************************************************************************************************** */
document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector(".search input[type='text']");
    const button = document.querySelector(".search button");
    const error = document.querySelector(".error");

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();  // Prevent form submission
            button.click();
            checkWeather(SearchBox.value)

        }
    });

    button.addEventListener("click", function() {
        const cityName = input.value.trim();
        if (cityName === "") {
            error.style.display = "block";
            checkWeather(SearchBox.value)
        } else {
            error.style.display = "none";
            // Implement your search functionality here
            console.log("Searching for:", cityName);
        }
    });
});
/******************************************************************************************************************** */



