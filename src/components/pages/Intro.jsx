import React, { useContext, useEffect } from 'react'
import MyContext from '../../context/MyContext'

const Intro = () => {
  const {setRotator}= useContext(MyContext)
  useEffect(()=>{
    console.log('chl rha haio asdfasdf');
    
  },[setRotator])
  return (
    <div className='h-full w-full p-6 relative'>
     <h1 className='mt-4 font-sans font-bold text-7xl'>HELLO</h1>    
    <h1 className='mt-2 '>From </h1>
     <p className='mt- capitalize'>An Overenthusiatic Devloper From INDIA <br/><span className=' tracking-tighter'>🟠🤍🟢</span></p>
<img src="/images/my.png" alt="" className='ml-auto h-1/2 absolute bottom-1 right-6'/>

    </div>
  )
}

export default Intro

