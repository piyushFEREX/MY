import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import Toggle from './Toggle';
import { RiPhoneLine, RiReactjsLine, RiShareLine, RiUserLine } from '@remixicon/react';

const NavBar = () => {
  const { FullWidth,settogglebutt, landscapeFlotingNav, setlandscapeFlotingNav, FullHeight, MobileScreen } = useContext(MyContext);
  const NavWidth = 17; // Standardizing variable naming

  useEffect(() => {
    console.log('MobileScreen:', MobileScreen, 'FullHeight:', FullHeight, 'FullWidth:', FullWidth, 'NavWidth:', NavWidth);

    if (!MobileScreen) {
      const calculatedValue = FullHeight * 1.76 + NavWidth;
      console.log('Calculated value:', calculatedValue);
      if (calculatedValue > FullWidth) {
        setlandscapeFlotingNav(true);
        settogglebutt(true)
      }
    }
  }, [MobileScreen, FullHeight, FullWidth, NavWidth, setlandscapeFlotingNav]);

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
      className={`p-2 z-20 absolute right-0 top-0 transition-all duration-500 ease-in-out ${landscapeFlotingNav ? 'transform translate-x-[100%] opacity-0' : 'transform  opacity-100'}`}
    >

      <div className={`${MobileScreen ? 'flex-row' : 'flex-col'} h-full w-full flex justify-between p-3 glassmorphism rounded-2xl`}>
        <h1 className={`${MobileScreen ? 'items-center border-r py-' : 'justify-center border-b'} border-slate-400 p-2 flex text-xl tracking-wide font-semibold`}>
          Piyush
        </h1>

        <div className={`${MobileScreen ? 'flex-row w-full justify-evenly items-center' : 'flex-col gap-9 justify-center items-center'} flex`}>
          <Toggle size={MobileScreen ? '8' : NavWidth} />

          <span className={`${MobileScreen ? 'flex-col items-center text-sm w-[30%]' : 'flex-row py-3 px-5'} flex cursor-pointer rounded hover:bg-slate-500 hover:bg-opacity-20`}>
            <RiUserLine />
            <h1>Socials</h1>
          </span>

          <span className={`${MobileScreen ? 'flex-col items-center text-sm w-[30%]' : 'flex-row py-3 px-5'} flex cursor-pointer rounded hover:bg-slate-500 hover:bg-opacity-20`}>
            <RiReactjsLine />
            <h1>Projects</h1>
          </span>
        </div>

        <div
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
