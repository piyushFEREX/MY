import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Sections = () => {
    const{MobileScreen,Opacity}=useContext(MyContext)

  return (
    <><div className={`${MobileScreen ? 'rounded-tr-full' : 'rounded-tl-full'} bg-black ${Opacity ? 'flex' : 'hidden'} h-full w-full z-50 bg-opacity-20 bg-black absolute top-0 left-0`}></div></>
  )
}

export default Sections