import React from 'react';
import Select from './Select';


const Navigation = () => {
    return (
        <div className="NavBar">
            <div className='datetime-row'>
                <h1 className="time">09:58:04</h1>
                <p >
                    <span className='date  grey-text'>Feb 13,2018  </span>
                    <span className='nav-loc-icon grey-text'>!!</span>
                    <span className='nav-loc grey-text'>Delhi</span>
                </p>
            </div>
            <hr className='hr'/>
            <div className='loc-details-row'>
                <Select/>
                <div>
                <li className='li-el'>PM10 Value</li>
                <h1>300</h1>
                </div>
            </div>

            <hr className='hr'/>
            <div className='datetime-row'>
                <h2 className="time">color code</h2>
                <ul className="color-unordered-list">
                    <li className='color-li-el green-li-el grey-text'>
                        <span className='range range-green'>0 to 50</span>
                         | 
                         <span className='color-msg'>
                             Good
                             </span></li>
                    <li className='color-li-el yellow-li-el grey-text'>
                        <span className='range range-yellow'>51 to 100</span>
                         | 
                         <span className='color-msg'>
                             Moderate
                             </span></li>
                    <li className='color-li-el orange-li-el grey-text'>
                        <span className='range range-orange'>101 to 150</span>
                         | 
                         <span className='color-msg'>
                             Unhealthy for Sensitive Group</span></li>
                    <li className='color-li-el red-li-el grey-text'>
                        <span className='range range-red'>151 to 200</span>
                         | 
                         <span className='color-msg'>
                             Unhealthy
                             </span></li>
                    <li className='color-li-el purple-li-el grey-text'>
                        <span className='range range-purple'>201 to 300</span>
                         | 
                         <span className='color-msg'>
                             Very Unhealthy</span></li>
                    <li className='color-li-el brown-li-el grey-text'>
                        <span className='range range-brown'>Above 300</span>
                         | 
                         <span className='color-msg'>
                             Hazardous
                             </span></li>
                </ul> 
            </div>
            <hr className='hr'/>
        </div>
    )
};

export default Navigation;