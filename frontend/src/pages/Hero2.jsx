import React from 'react'

import NewLandingPage from '../components/NewLandingPage'
import CoreValues from '../components/CoreValueSection/CoreValues'
import NewGetInTouch from '../components/NewGetInTouch'
import TransformingBusinessSection from '../components/TransformingBusinessSection'

import ServicesNewTheme from '../components/ServicesNewTheme'
import FirstPage from '../components/FirstPage'
import HawaMahal from '../components/HawaMahal'


const Hero2 = () => {
  return (
    <div>
      <FirstPage/>
      <NewLandingPage/>
      <HawaMahal/>
      <CoreValues/>
    
         
      <TransformingBusinessSection/>
      <NewGetInTouch/>
      
    </div>
  )
}

export default Hero2