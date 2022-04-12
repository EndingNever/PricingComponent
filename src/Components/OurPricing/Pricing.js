import React, { useState } from 'react'
import "./Pricing.scss"

export default function Pricing(props) {
    // const [annually, setAnnually] = useState(false)

    // const [slider, setSlider] = useState('right-action')
console.log(props.annually);
    const onSlideEnabled = () => {
        if (props.slider === 'left-action') {
            props.setSlider('right-action');
            props.setAnnually(false);
        } else if (props.slider === 'right-action') {
            props.setSlider('left-action')
            props.setAnnually(true)
        }
    }

    return (
        <div className='pricing-component'>
            <header className="header">
                <h2>Our Pricing</h2>
                <div className="toggle">
                    <p className='annually'>Annually</p>
                    <div onClick={onSlideEnabled} className="slider">
                        <div className={`slider-button ${props.slider}`}></div>
                    </div>
                    <p className='monthly'>Monthly</p>
                </div>
            </header>
        </div>
    )
}
