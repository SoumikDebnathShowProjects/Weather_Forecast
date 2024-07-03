const apiKey="77004faa49cb81065a7e1511ef1d2546"
const apiurl="https://api.openweathermap.org/data/2.5/weather?q="
const SearchBox=document.querySelector(".search input");
const Searchbtn=document.querySelector(".search button");
const WeatherIcon=document.querySelector(".weather-icon");
const fore=document.querySelector(".forecast");
async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apiKey}`)
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

Searchbtn.addEventListener('click',()=>{
    checkWeather(SearchBox.value)
})




