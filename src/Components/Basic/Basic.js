import React from 'react'
import "./Basic.scss"

export default function Basic(props) {
    return (
        <>
            {props.options.map((option) => (

                <div className="basic-card" key={option.id}>
                    <div className="card-title">
                        <h3>{option.name}</h3>
                    </div>
                    <div className="card-price">
                        {option.monthlyPrice}
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
                    <button>button</button>
                </div>
            ))}
        </>
    )
}
