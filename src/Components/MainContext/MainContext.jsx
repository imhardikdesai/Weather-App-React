import React from 'react'
import TimeBox from '../TimeBox/TimeBox'
import WeatherInfo from '../WeatherDataInfo/WeatherInfo'
import './MainContext.css'

export default function MainContext() {
  return (
    <div id='mainContext' className='container-fluid'>
      <TimeBox/>
      <WeatherInfo/>
    </div>
  )
}
