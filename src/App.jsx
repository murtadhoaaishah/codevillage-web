import React from 'react'
import "./App.css"
import Button from './COMPONENTS/Button'


function App() {

  return (
    <div >
      <img src='/vectors/cv-logo.svg' className='logo' />

      <section className='section1'>
        <span className='section1-heading'>We build <br /> world class <br /> Tech talents</span>
        <span className='section1-description'>Join our next cohort to accelerate your dream of being a <br /> World Class Software Developer. No coding experience <br /> required.</span>
        <Button label='Enroll now' />
        <div className='sections1-footer'>
          <a href="facebook.com"><img src='/vectors/fb-icon.svg' /></a>
          <a href="twitter.com"><img src='/vectors/tw-icon.svg' /></a>
          <a href="github.com" ><img src='/vectors/github-icon.svg' /></a>
          <a href="maps.google.com"><img src='/vectors/location.svg' /></a>
        </div>
      </section>
      <section className='section2'>
        <span className='section1-heading'>State of The Art
          Ecosystem for Creatives</span>
        <span className='section1-description'> Be a part of an all-inclusive technology hub where you learn, collaborate with tech creatives and join a team of support systems offering you the top tools and frameworks to build solutions and earn big.</span>
      </section>
    </div>
  )
}

export default App