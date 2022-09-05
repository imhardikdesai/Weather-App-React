import React from 'react'
import './Weatherinfo.css'
export default function WeatherInfo() {
    return (
        <div id='weatherInfo'>
            <img style={{ filter: "invert()" }} src="https://static.thenounproject.com/png/3541181-200.png" alt="cloud" />
            <h1 className='display-4'>Haze</h1><br />
            <h4>Delhi, IN</h4>
            <p className="fs-4">Temperature &nbsp;&nbsp; 20°C Haze </p>
            <p className="fs-4">Humidity &nbsp;&nbsp; 20% </p>
            <p className="fs-4">Wind Speed &nbsp;&nbsp; 20km/h </p>
            <p className="fs-4">Visibility &nbsp;&nbsp; 3000 mi </p>
        </div>
    )
}
