import React from 'react'
import "./Pricing.scss"

export default function Pricing() {
    const onSlideEnabled=()=>{
        
    }
    
    return (
        <div className='pricing-component'>
            <header className="header">
                <h2>Our Pricing</h2>
                <div className="toggle">
                    <p className='annually'>Annually</p>
                    <div className="slider">
                        <div onClick={onSlideEnabled} className="slider-button left-action"></div>
                    </div>
                    <p className='monthly'>Monthly</p>
                </div>
            </header>
        </div>
    )
}
