import React, { useState } from 'react'
import TimeBox from '../TimeBox/TimeBox'
import WeatherInfo from '../WeatherDataInfo/WeatherInfo'
import './MainContext.css'
import axios from 'axios'

export default function MainContext() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=fe4feefa8543e06d4f3c66d92c61b69c`;

  const getWeatherData = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then(res => {
        setWeatherData(res.data);
      }).catch(err => {
        console.log(err);
      });

      setCity('');
    }
  }
  const toCelsius = (temp) => {
    return ((temp - 32) * 5 / 9).toFixed();
  }


  return (
    <div id='mainContext' className='container-fluid'>
      <div className="searchBox">
        <input type="text" value={city} placeholder="Enter Location" onChange={(e) => setCity(e.target.value)} onKeyPress={getWeatherData} />
      </div>

      {weatherData.main ? <TimeBox temperature={toCelsius(weatherData.main.temp)} /> : null}

      {weatherData.main ? <WeatherInfo temperature={toCelsius(weatherData.main.temp)} name={weatherData.name} clouds={weatherData.weather[0].main} humidity={weatherData.main.humidity} speed={weatherData.wind.speed} visibility={weatherData.visibility} /> : null}
    </div>
  )
}
