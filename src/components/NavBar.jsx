import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
// import Toggle from './Toggle'

const NavBar = () => {
    const{MobileScreen,theme,settheme}=useContext(MyContext)
  return (
    <div
    style={
      MobileScreen ?
      {position:'absolute',top:'calc(100vw * 1.62)',width:'100vw', height: 'calc(100vh - (100vw * 1.62))'}
    :
    {minWidth: 'calc(100vw - (100vh * 1.62))'}}    
    className='h-full p-2 z-20 absolute right-0 top-0'>
    <div className='h-full w-full glassmorphism rounded-2xl'>
      {/* theme of it  */}
       <button className='p-1 bg-red-600 rounded-full' onClick={()=>settheme(!theme)}> theme change kar BKL</button>
      {/* <Toggle/> */}

    </div>   
     
    </div>
  )
}

export default NavBar