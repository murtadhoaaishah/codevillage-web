import React from 'react'
import './Button.css'

const Button = ({ label }) => {
    return (
        <div className='button-div'>
            <button className='button'>{label}</button>
        </div>
    )
}

export default Button
