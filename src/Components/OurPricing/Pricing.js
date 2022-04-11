import React, { useState } from 'react'
import "./Pricing.scss"

export default function Pricing() {
    const [annually, setAnnually] = useState(false)
    const [slider, setSlider] = useState('right-action')
    const onSlideEnabled=()=>{
        if(slider==='left-action'){
            setSlider('right-action');
            setAnnually(true);
            console.log('going right', "annually is " + annually);
        } else if (slider==='right-action'){
            setSlider('left-action')
            setAnnually(false)
            console.log('going left',"annually is " +  annually);
        }
    }
    
    return (
        <div className='pricing-component'>
            <header className="header">
                <h2>Our Pricing</h2>
                <div className="toggle">
                    <p className='annually'>Annually</p>
                    <div onClick={onSlideEnabled} className="slider">
                        <div className={`slider-button ${slider}`}></div>
                    </div>
                    <p className='monthly'>Monthly</p>
                </div>
            </header>
        </div>
    )
}
