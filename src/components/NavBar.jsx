import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const NavBar = () => {
    const{MobileScreen,theme,settheme}=useContext(MyContext)
  return (
    <div
    style={{width : 'calc(100vw - (100vh * 1.62)'}}
    className='h-full p-2 z-20 absolute right-0 top-0'>
<div className='h-full w-full glassmorphism rounded-2xl'>
    <button className='p-2 bg-red-600 rounded-full' onClick={()=>settheme(!theme)}> theme </button>

    </div>   
     
    </div>
  )
}

export default NavBar