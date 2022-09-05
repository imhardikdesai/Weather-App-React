import React from 'react'
import TimeBox from '../TimeBox/TimeBox'
import WeatherInfo from '../WeatherDataInfo/WeatherInfo'
import './MainContext.css'

export default function MainContext() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=amreli&appid=fe4feefa8543e06d4f3c66d92c61b69c")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
    <div id='mainContext' className='container-fluid'>
      <TimeBox />
      <WeatherInfo />
    </div>
  )
}
