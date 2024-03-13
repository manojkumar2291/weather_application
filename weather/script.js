
const apikey="1a4239911e80c874df5595b8a15270d5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather( city){
  const response=await fetch(apiurl + city + `&appid=${apikey}`);
  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

  }
  else{
    var data=await response.json();
  
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + " °C";
  document.querySelector('.humadity').innerHTML=data.main.humidity +" %";
  document.querySelector(".wind").innerHTML=data.wind.speed + " km";
  console.log(data);
  console.log(data.weather[0].main);
    if(data.weather[0].main=='Clouds'){
      weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
      weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main==='Rain'){
      weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main==='Drizzle'){
      weatherIcon.src="images/Drizzle.png";
    }
    else if(data.weather[0].main==='Mist'){
      weatherIcon.src="images/Mist.png";
    }
    
    document.querySelector(".weather").style.display='block';
    document.querySelector(".error").style.display="none";
  }
  
  
}

searchbtn.addEventListener('click',()=>{
  checkWeather(searchbox.value);
})
  