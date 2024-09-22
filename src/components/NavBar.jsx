import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import Toggle from './Toggle';
import Socials from './Socials';
import { RiPhoneLine, RiReactjsLine, RiShareLine, RiUserLine } from '@remixicon/react';

const NavBar = () => {
  const { FullHeight, MobileScreen, theme, settheme } = useContext(MyContext);
  const [FloatingNav, setFloatingNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (MobileScreen) {
        if (FullHeight - window.innerWidth * 1.62 > 80) {
          console.log('DRAKE KA LUND');
        }
      } else {
        if (window.innerWidth - FullHeight * 1.62 > 150) {
          console.log('LETE HUE DRAKE KA LUND');
        }
      }
    };

    handleResize(); // Initial check on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [MobileScreen, FullHeight]); // Dependencies added

  return (
    <div
      style={
        MobileScreen
          ? {
              position: 'absolute',
              top: `${FullHeight - 80}px`, // Simplified calc
              width: '100vw',
              height: '80px',
            }
          : {
              height: '100vh',
              width: `calc((${window.innerWidth+'px'} - ${FullHeight+"px"} * 1.62)`,
            }
      }
      className="p-2 z-20 absolute right-0 top-0">
      <div className={`${MobileScreen ? 'flex-row' : 'flex-col'} h-full w-full flex justify-between p-3 glassmorphism rounded-2xl`}>
        <h1 className={` ${MobileScreen ? 'items-center border-r py-' : 'justify-center border-b'} border-slate-400 p-2 flex text-xl tracking-wide font-semibold`}>Piyush</h1>
        
        <div className={`${MobileScreen ? 'flex-row w-full justify-evenly items-center' : 'flex-col gap-9 justify-center items-center'} flex`}>

          <Toggle size={MobileScreen ? '8':'17'}/>

          <span
          
          className={`${MobileScreen ? 'flex-col items-center text-sm w-[30%]' : 'flex-row py-3 px-5 '} flex cursor-pointer rounded  hover:bg-slate-500 hover:bg-opacity-20`}><RiUserLine /><h1>Socials</h1></span>

          <span
          
          className={`${MobileScreen ? 'flex-col items-center  text-sm w-[30%]' : 'flex-row py-3 px-5 '} flex cursor-pointer rounded hover:bg-slate-500 hover:bg-opacity-20`}><RiReactjsLine /><h1>Projects</h1></span>
        </div>


        <div
  onMouseEnter={(x) => {
    x.currentTarget.classList.add('ButtonGradient'); // Use currentTarget to ensure the parent div is targeted
    x.stopPropagation(); // Correctly stopping event propagation
  }}
  onMouseLeave={(x) => {
    x.currentTarget.classList.remove('ButtonGradient'); // Ensure currentTarget is used here as well
    x.stopPropagation();
  }}
  className={`${MobileScreen ? 'items-center border-l' : 'justify-center border-t py-2'} vibrant-background hover:rounded-lg hover:scale-110d transition-all duration-100 border-slate-400 flex px-2 cursor-pointer`}
>
  <span className='p-2 rounded'>
    <RiShareLine />
  </span>
</div>


      </div>
    </div>
  );
};

export default NavBar;
