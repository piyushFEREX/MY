import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import Toggle from './Toggle';
import { RiPhoneLine, RiReactjsLine, RiShareLine, RiUserLine } from '@remixicon/react';
import HamNav from './HamNav';

const NavBar = () => {
  const { FullWidth,settogglebutt,togglebutt, landscapeFlotingNav, setlandscapeFlotingNav, FullHeight, MobileScreen, setRotator } = useContext(MyContext);
  const NavWidth = 17; // Standardizing variable naming
  

  const shareData ={
    title:'mdn',
    text:'share my portphollio',
    url:window.location
  }

  const Sharehandler = async () => {
    
    if (navigator.share) {
      try {
        const shareData = {
          title: 'mdn',
          text: 'Share my portfolio',
          url: window.location.href,
        };
        await navigator.share(shareData);
       console.log('Shared successfully');
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      window.alert("Web Share API not supported, please use browser's Share Button");
    }
  };
  

  useEffect(() => {
    console.log('MobileScreen:', MobileScreen, 'FullHeight:', FullHeight, 'FullWidth:', FullWidth, 'NavWidth:', NavWidth,'togglebutt:',togglebutt ,'landscape:',landscapeFlotingNav);

    if (!MobileScreen) {
      const calculatedValue = FullHeight * 1.82+ NavWidth;
      console.log('Calculated value:', calculatedValue);
      if (calculatedValue > FullWidth) {
        setlandscapeFlotingNav(true);
        settogglebutt(true)
      }
    }
  }, [MobileScreen, NavWidth, setlandscapeFlotingNav]);

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
            }
      }
      className={`p-2 z-20 absolute right-0 top-0 transition-all duration-500 ease-in-out ${landscapeFlotingNav ? 'transform translate-x-[100%] ' : 'transform'}`}
    >
      {!MobileScreen ? togglebutt?  <HamNav/>:'':''}
      <div className={`${MobileScreen ? 'flex-row' : 'flex-col'} h-full w-full flex justify-between p-3 glassmorphism rounded-2xl`}>
        <h1 className={`${MobileScreen ? 'items-center border-r py-' : 'justify-center border-b'} border-slate-400 p-2 flex text-xl tracking-wide font-semibold`}>
          Piyush
        </h1>

        <div className={`${MobileScreen ? 'flex-row w-full justify-evenly items-center' : 'flex-col gap-9 justify-center items-center'} flex`}>
          <Toggle size={MobileScreen ? '8' : NavWidth} />

          <span
           onClick={()=>{navigator.vibrate(10); setRotator(0)}}
          className={`${MobileScreen ? 'flex-col items-center text-sm w-[30%]' : 'flex-row py-3 px-5'} flex cursor-pointer rounded hover:bg-slate-500 hover:bg-opacity-20`}>
            <RiUserLine />
            <h1>Socials</h1>
          </span>

          <span
           onClick={()=>{navigator.vibrate(10)}}
          className={`${MobileScreen ? 'flex-col items-center text-sm w-[30%]' : 'flex-row py-3 px-5'} flex cursor-pointer rounded hover:bg-slate-500 hover:bg-opacity-20`}>
            <RiReactjsLine />
            <h1>Projects</h1>
          </span>
        </div>

        <div
        onClick={()=>Sharehandler()}
          onMouseEnter={(e) => {
            e.currentTarget.classList.add('ButtonGradient');
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove('ButtonGradient');
          }}
          className={`${MobileScreen ? 'items-center border-l' : 'justify-center border-t py-2'} vibrant-background hover:rounded-lg hover:scale-110 transition-all duration-100 border-slate-400 flex px-2 cursor-pointer`}
        >
          <span className="p-2 rounded">
            <RiShareLine />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
