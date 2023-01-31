import React from 'react'
import "./Programs.css"

const Programs = ({ image, programHeading, programDescOne, programDescTwo }) => {
    return (
        <div className='program-wrapper'>
            <img src={image} alt="" />
            <div className='program-wording-wrapper'>
                <span className='program-heading'>{programHeading}</span>
                <span className='program-desc1'>{programDescOne}</span>
                <span className='program-desc2'>{programDescTwo}</span>
            </div>
        </div>
    )
}

export default Programs
