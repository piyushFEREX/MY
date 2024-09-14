import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import Toggle from './Toggle'
import Socials from './Socials'

const NavBar = () => {
    const{MobileScreen,theme,settheme}=useContext(MyContext)
  return (
    <div
    style={
      MobileScreen ?
      {
        position:'absolute',
        top:'calc(100vw * 1.62)',
        width:'100vw', 
        // height:'calc( (100vw * 1.62) - 100vw)'
        
      }

      :
      { 
        height:'100vh',
        width: 'calc((100vh * 1.62) - 100vh)'
      }}    
    className='p-2 z-20 absolute right-0 top-0'>
    <div className=' h-full w-full glassmorphism rounded-2xl'>
      {/* theme of it  */}
     
      <Toggle size={10}/>
      <Socials/>

    </div>   
     
    </div>
  )
}

export default NavBar