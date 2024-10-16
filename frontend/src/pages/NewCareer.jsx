import React from 'react'
import MiddleCareer from '../components/MiddleCareer'
import CareerLanding from '../components/CareerOverview/CareerLanding.jsx';
import Careerbottom from '../components/CareerOverview/Careerbottom.jsx';
import PopupCareer from '../components/PopupCareer.jsx';

const NewCareer = () => {
  return (
    <div className='h-full w-full'>
      <CareerLanding />
      
    <MiddleCareer/>
    {/* <PopupCareer/> */}
    <Careerbottom />

    </div>
  )
}

export default NewCareer