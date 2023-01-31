import React from 'react'
import "./App.css"
import Button from './Components/Button'
import Courses from './COMPONENTS/Courses'


function App() {

  return (
    <div className='container'>
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
          <img src="/images/hero_bg.png" />
        </div>
      </section>

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
      <section className='section3'>
        <div className='section3-wordings'></div>
        <span className='advert'>Learn Web & Mobile <br /> Development. Access <br /> the global job market.</span>
        <span className='advert-desc'>The world is constantly in need of technical talent supply pool. Tech is needed <br /> accross every sector. Your course of study doesn’t matter. All you need is the<br /> skill and experience.</span>
        <div className='programs'></div>
        <Button label={'Learn more'} />
      </section>
    </div>
  )
}

export default App