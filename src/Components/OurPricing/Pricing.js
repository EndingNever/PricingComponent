import React, { useState } from 'react'
import "./Pricing.scss"

export default function Pricing(props) {
    // const [annually, setAnnually] = useState(false)

    // const [slider, setSlider] = useState('right-action')
console.log(props.annually);
    const onSlideEnabled = () => {
        if (props.slider === 'left-action') {
            props.setSlider('right-action');
            props.setAnnually(true);
            console.log('going right', "annually is " + props.annually);
        } else if (props.slider === 'right-action') {
            props.setSlider('left-action')
            props.setAnnually(false)
            console.log('going left', "annually is " + props.annually);
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
