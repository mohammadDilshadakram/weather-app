const timeE1=document.getElementById('time');
const dateE1=document.getElementById('date');
const currentWeatherItemsE1=document.getElementById('current-weather-items');
const timeZone=document.getElementById('time-zone');
const countryE1=document.getElementById('country');
const weatherForecastE1=document.getElementById('weather-forecast');
const currentTemp=document.getElementById('current-temp');

const Submit=document.getElementById('submit');


const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months=['Jan','Feb','Mar','April','May','June','July','August','September','October','Nov','Dec'];

const API_KEY='1650d5900456b685793eb5013d46f323';







// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';






const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7f1212ce5msh117cd157627c7d2p149f60jsne743e8ab4b13',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather= (city) =>{
    cityName.innerHTML=city
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
  .then(response=>response.json())
  .then(response=> {
    
    
    console.log(response)

    Temperature.innerHTML=response.temp
    humidity.innerHTML=response.humidity
    feels_like.innerHTML=response.feels_like
    wind_speed.innerHTML=response.wind_speed

  })
  .catch(err=> console.log(err));

}

Submit.addEventListener("click", (e)=> {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Howrah")



setInterval(()=>{
    const time=new Date();
    const month=time.getMonth();
    const date=time.getDate();
    const day=time.getDay();
    const hour=time.getHours();
    const hoursIn12HrFormat=hour >= 13 ? hour %12: hour
    const minutes=time.getMinutes();
    const ampm=hour >=12 ? 'pm' :'Am'

    timeE1.innerHTML=hoursIn12HrFormat + ':' + minutes+ ' '+ `<span id="am-pm">${ampm}</span>`

    dateE1.innerHTML=days[day]+ ' ,'+ date+ ' '+ months[month]

},1000);






// getWeatherData();
// function getWeatherData (){
//     navigator.geolocation.getCurrentPosition((success)=>{
       

//         let {latitude,longitude} =success.coords;

//         fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res=> res.json()).then(data=>{
            
//             console.log(data);
//             showWeatherData(data);

//         })
//     })
// }







function showWeatherData (response){
    let {humidity,pressure,sunrise,sunset,wind_speed}=response.humidity;

    currentWeatherItemsE1.innerHTML=`<div class="weather-item">
    <div>humidity</div>
    <div>${response.humidity}</div>
</div>
<div class="weather-item">
    <div>pressure</div>
    <div>${pressure}</div>
</div>
<div class="weather-item">
    <div>Wind speed</div>
    <div>${wind_speed}</div>
</div>
<div class="weather-item">
    <div>Sunrise</div>
    <div>${sunrise}</div>
</div>
<div class="weather-item">
    <div>Sunset</div>
    <div>${sunset}</div>
</div>



`;


    
}
