import React from 'react'
import "./SectionTwo.css"
import Courses from '../Courses'

const SectionTwo = () => {
    return (
        <section className='section2'>
            <div className='section2-wordings-div'>
                <span className='section2-heading'>State of The Art <br />
                    Ecosystem for Creatives</span>
                <span className='section2-description'> Be a part of an all-inclusive technology hub where <br /> you learn, collaborate with tech creatives and join a <br /> team of support systems offering you the top tools <br /> and frameworks to build solutions and earn big.</span>
            </div>
            <div className='section2-img-div'>
                <img src="/images/cv-office.jpg" alt="" />
            </div>
            <div className='courses-wrapper'>
                <Courses
                    img={<img src='/vectors/bookmark-circle.svg' style={{ height: "3rem" }} />}
                    heading='Web & Mobile Development'
                    description={'We design and develop tech solutions for SMEs and Government Agency.'} />
                <Courses
                    img={<img src='/vectors/tent-circle.svg' style={{ height: "3rem" }} />}
                    heading={'Bootcamps & Trainings'}
                    description={'We’re building the next generation of tech talents.'} />
                <Courses
                    img={<img src='/vectors/workspace-circle.svg' style={{ height: "3rem" }} />}
                    heading={'Workspaces & Tech Hub'}
                    description={'Work and Connect with other Creatives. All in a fun and cozy environment.'}
                />
            </div>
        </section>
    )
}

export default SectionTwo
