import React from 'react'

const Schedule = ({ image, schedule_heading, schedule_desc }) => {

    const wrapperStyle = {
        display: "flex",
        flexDirection: "row"
    }

    const headingStyle = {
        display: "flex",
        flexDirection: "column"
    }
    const advertHeadingStyle = {
        fontSize: "1.5rem",
        color: "#18214D",
        fontWeight: "600",
        marginBottom: "2rem"

    }

    const advertDescStyle = {
        fontSize: "1.5rem",
        color: "#18214D",
        fontWeight: "600",
        marginBottom: "2rem"

    }
    return (
        <div style={wrapperStyle}>
            <div>{image}</div>
            <div>
                <span>{schedule_heading,}</span>
                <span>{schedule_desc}</span>
            </div>
        </div>
    )
}

export default Schedule
