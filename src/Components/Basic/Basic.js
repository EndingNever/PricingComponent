import React from 'react'
import "./Basic.scss"

export default function Basic(props) {
    const options = props.options;
    return (
        <>
            {options.map((option) => (

                <div className={`basic-card basic-card-${option.id}`} key={option.id}>
                    <div className="card-title">
                        <h3>{option.name}</h3>
                    </div>
                    <div className="card-price">
                        <h1>{option.monthlyPrice}</h1>
                    </div>
                    <div className="card-info">
                        <div className="card-features">
                            <hr className='hr' />
                            <div className="feature">{option.features[0]}</div>
                            <hr className='hr' />
                            <div className="feature">{option.features[1]}</div>
                            <hr className='hr' />
                            <div className="feature">{option.features[2]}</div>
                            <hr className='hr' />
                        </div>
                    </div>
                    <button className={`button button-${option.id}`}><p>Learn More</p></button>
                </div>
            ))}
        </>
    )
}
