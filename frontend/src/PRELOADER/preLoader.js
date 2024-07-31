import React, { useEffect } from 'react'
import '../PRELOADER/preLoader.css'
import { preLoaderAnim } from './Animation'
const PreLoader = () => {

  useEffect(()=>{
    preLoaderAnim()
  })
  return (
    <div className='preloader'>
      <div className='texts-container'>
        <span>Welcome</span>
        <span>To</span>
        <span>LunarEdge</span>
      </div>
    </div>
  )
}

export default PreLoader