import React from 'react'
import './Coffee.css'

function Coffee() {
  return (
    <div className="coffee">
        <div className="coffeetypes">
            <img src='../../assets/hotcoffee.jpg' alt=""className='coffeeImages'/>
            <p className='coffeeText'>Hot Coffee</p>
        </div>
        <div className="coffeetypes">
            <img src='../../assets/coldcoffee.jpg' alt="" className='coffeeImages'/>
            <p className='coffeeText'>Cold Coffee</p>
        </div>
        <div className="coffeetypes">
            <img src='../../assets/cofee3.jpg' alt="" className='coffeeImages'/>
            <p className='coffeeText'>Cup Coffee</p>
        </div>
        <div className="coffeetypes">
            <img src='../../assets/dessert.jpg' alt="" className='coffeeImages'/>
            <p className='coffeeText'>DESSERT</p>
        </div>
    </div>
  )
}

export default Coffee 