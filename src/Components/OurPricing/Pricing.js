import React, { useState } from 'react'
import "./Pricing.scss"

export default function Pricing() {
    const [slider, setSlider] = useState('left-action')
    const onSlideEnabled=()=>{
        if(slider==='left-action'){
            console.log('going right');
            setSlider('right-action');
        } else{
            console.log('going left')
            setSlider('left-action')
        }
    }
    
    return (
        <div className='pricing-component'>
            <header className="header">
                <h2>Our Pricing</h2>
                <div className="toggle">
                    <p className='annually'>Annually</p>
                    <div onClick={onSlideEnabled} className="slider">
                        <div  className={`slider-button ${slider}`}></div>
                    </div>
                    <p className='monthly'>Monthly</p>
                </div>
            </header>
        </div>
    )
}
