import React from 'react'
import Button from '../Button'
import "./Hero.css"

const Hero = () => {
    return (
        <section className='section1'>
            <div className='wordings'>


                <span className='wordings-heading'>We build world class Tech talents</span>
                <span className='wordings-description'>Join our next cohort to accelerate your dream of being a World Class Software Developer. No coding experience required.</span>
                <Button label='Enroll now' />
                <div className='wordings-footer'>
                    <a href="facebook.com"><img src='/vectors/fb-icon.svg' /></a>
                    <a href="twitter.com"><img src='/vectors/tw-icon.svg' /></a>
                    <a href="github.com" ><img src='/vectors/github-icon.svg' /></a>
                    <a href="maps.google.com"><img src='/vectors/location.svg' /></a>
                </div>
            </div>
            <div className='bg-img'>
                <img src="/images/hero_bg.png" />
            </div>
        </section>
    )
}

export default Hero
