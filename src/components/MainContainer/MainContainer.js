import './MainContainer.css'
import React from 'react'


function MainContainer() {
  return (
    <div className='main-container'>
        <div className='content'>
        <h5><b>SUMMER 2020</b></h5>
        <h1><b>NEW COLLECTION</b></h1>
        <div className='main-container-description-div'>
        <h3 className='main-container-description'><b>We know how large objects will act, but things on a small scale.</b></h3>
        </div>
        <button className='shop-button'>SHOP NOW</button>
        </div>
        <img src="images/main.png" alt='main' className='main-image' />
    </div>
  )
}

export default MainContainer