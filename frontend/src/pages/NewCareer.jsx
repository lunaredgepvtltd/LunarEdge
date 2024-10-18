import React from 'react'
import MiddleCareer from '../components/MiddleCareer'
import CareerLanding from '../components/CareerOverview/CareerLanding.jsx';

import PopupCareer from '../components/PopupCareer.jsx';

const NewCareer = () => {
  return (
    <div className='h-full w-full'>
      <CareerLanding />
      
    <MiddleCareer/>
    {/* <PopupCareer/> */}
 

    </div>
  )
}

export default NewCareer