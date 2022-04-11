import React from 'react'
import "./Pricing.scss"

export default function Pricing() {
    return (
        <div className='pricing-component'>
            <header className="header">
                <h2>Our Pricing</h2>
                <div className="toggle">
                    <p className='annually'>Annually</p>
                    <p className='monthly'>Monthly</p>
                </div>
            </header>
        </div>
    )
}
