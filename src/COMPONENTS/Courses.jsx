import React from 'react'

const Courses = ({ img, heading, description }) => {
    const imageDiv = {
        display: "flex",
        flexDirection: "row",
        // alignItems: "start"

    }

    const imgStyle = {
        marginRight: "2rem"
    }

    const wordingsDiv = {
        display: "flex",
        flexDirection: "column",
    }
    const sectionFooterHeading = {
        fontSize: "1.5rem",
        color: "#18214D",
        fontWeight: "600",
        marginBottom: "2rem"

    }
    const sectionFooterDescription = {
        // fontSize: "1.25rem",
        // fontWeight: "600",
        color: "#656B83"
    }

    return (

        < div style={imageDiv}>
            <div style={imgStyle}>{img}</div>
            <div style={wordingsDiv}>
                <span style={sectionFooterHeading}>{heading}</span>
                <span style={sectionFooterDescription}>{description}</span>
            </div>
        </div >

    )
}

export default Courses
