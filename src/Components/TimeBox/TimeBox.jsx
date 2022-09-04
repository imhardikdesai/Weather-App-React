import React from 'react'
import './TimeBox.css'
export default function TimeBox() {
    return (
        <div id='timeBox' className='container'>
            <div className="clock">
                <h1 className='display-5'>01:59:23</h1>
                <h1 className='display-6'>Tuesday, 19 january 2022</h1>
            </div>
            <div className="tempreature">
                {/* <p>20°</p> */}
                <h1 className="display-1">20° C</h1>
            </div>
        </div>
    )
}
