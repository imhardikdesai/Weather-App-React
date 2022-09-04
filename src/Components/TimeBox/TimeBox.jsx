import React from 'react'
import './TimeBox.css'
export default function TimeBox() {
    return (
        <div id='timeBox' className='container'>
            <div className="clock">
                <p>01:59:23</p>
                <p>Tuesday, 19 january 2022</p>
            </div>
            <div className="tempreature">
                <p>20°</p>
            </div>
        </div>
    )
}
