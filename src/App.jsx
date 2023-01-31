import React from 'react'
import "./App.css"
import Button from './Components/Button'
import Courses from './COMPONENTS/Courses'
import Hero from './Components/Hero'
import SectionThree from './Components/SectionThree'
import SectionTwo from './Components/SectionTwo'


function App() {

  return (
    <div className='container'>
      <img src='/vectors/cv-logo.svg' className='logo' />

      <Hero />
      <SectionTwo />
      <SectionThree />

    </div>
  )
}

export default App