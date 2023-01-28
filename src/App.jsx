import React from 'react'
import "./App.css"
import Button from './COMPONENTS/Button'


function App() {

  return (
    <div >
      <section className='section1'>
        <div className='wordings'>

          <img src='/vectors/cv-logo.svg' className='logo' />

          <span className='wordings-heading'>We build <br /> world class <br /> Tech talents</span>
          <span className='wordings-description'>Join our next cohort to accelerate your dream of being a <br /> World Class Software Developer. No coding experience <br /> required.</span>
          <Button label='Enroll now' />
          <div className='wordings-footer'>
            <a href="facebook.com"><img src='/vectors/fb-icon.svg' /></a>
            <a href="twitter.com"><img src='/vectors/tw-icon.svg' /></a>
            <a href="github.com" ><img src='/vectors/github-icon.svg' /></a>
            <a href="maps.google.com"><img src='/vectors/location.svg' /></a>
          </div>
        </div>
        <div className='bg-img'>
          <img src="/public/images/hero_bg (1).png" />
        </div>
      </section>

      <section className='section2'>
        <div className='section2-wordings-div'>
          <span className='section2-heading'>State of The Art <br />
            Ecosystem for Creatives</span>
          <span className='section2-description'> Be a part of an all-inclusive technology hub where <br /> you learn, collaborate with tech creatives and join a <br /> team of support systems offering you the top tools <br /> and frameworks to build solutions and earn big.</span>
        </div>

      </section>
    </div>
  )
}

export default App