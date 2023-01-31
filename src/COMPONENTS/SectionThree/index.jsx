import React from 'react'
import Button from '../Button'
import Programs from '../Programs'
import "./SectionThree.css"

const SectionThree = () => {
    return (
        <section className='section3'>
            <div className='section3-wordings'>
                <span className='advert'>Learn Web & Mobile Development. Access the global job market.</span>
                <span className='advert-desc'>The world is constantly in need of technical talent supply pool. Tech is needed accross every sector. Your course of study doesn’t matter. All you need is the skill and experience.</span>
                <Button label={'Learn more'} />
            </div>
            <div className='programs'>
                <Programs
                    image={'/vectors/mail-white.svg'}
                    programHeading={'Program Schedule'}
                    programDescOne={'6 months training + 6months paid internship'}
                    programDescTwo={'(there is a custom schedule for students)'}
                />
                <Programs
                    image={'/vectors/group-white.svg'}
                    programHeading={'Our Curriculum'}
                    programDescOne={'It covers the fundamentals and advanced concepts of web & mobile development'} />
                <Programs
                    image={'/vectors/group-white.svg'}

                    programHeading={'Experiential Learning'}
                    programDescOne={'30+ Hands-on Projects &'} />
            </div>
        </section>
    )
}

export default SectionThree
