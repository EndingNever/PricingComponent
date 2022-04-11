import React from 'react'
import "./Basic.scss"

export default function Basic(props) {
    return (
        <>
        {props.options.map((option)=>(

            <div className="basic-card">
                    {option.name}
                </div>
                ))}
        </>
    )
}
