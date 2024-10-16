import React from 'react'
import MiddleCareer from '../components/MiddleCareer'
import CareerLanding from '../components/CareerOverview/CareerLanding.jsx';
import Careerbottom from '../components/CareerOverview/Careerbottom.jsx';

const NewCareer = () => {
  return (
    <div className='h-full w-full'>
      <CareerLanding />
      
    <MiddleCareer/>
    <Careerbottom />
    </div>
  )
}

export default NewCareer