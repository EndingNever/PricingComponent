import React from 'react'
import "./Basic.scss"

export default function Basic(props) {
    const options = props.options;
    return (
        <div className="card-components-container">
            {options.map((option) => (
                <div className={`basic-card basic-card-${option.id}`} key={option.id}>
                    <div className={`card-title card-title-${option.id}`} >
                        <h3>{option.name}</h3>
                    </div>
                    <div className="card-price">
                        <h1><span>$</span>{props.annually===false ? `${option.monthlyPrice}` : `${option.yearlyPrice}`}</h1>
                    </div>
                    <div className="card-info">
                        <div className="card-features">
                            {/* <hr className='hr' /> */}
                            <div className="feature">{option.features[0]}</div>
                            {/* <hr className='hr' /> */}
                            <div className={`feature feature-${option.id}`}>{option.features[1]}</div>
                            {/* <hr className='hr' /> */}
                            <div className="feature" >{option.features[2]}</div>
                            {/* <hr className='hr' /> */}
                        </div>
                    </div>
                    <button className={`button button-${option.id}`}><p>Learn More</p></button>
                </div>
            ))}
        </div>
    )
}
