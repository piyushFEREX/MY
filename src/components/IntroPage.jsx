import React, { useContext, useEffect, useMemo, useRef } from 'react';
import './sectionStyle.css';
import MyContext from '../context/MyContext';
import Sections from './Sections';
import VanillaTilt from 'vanilla-tilt';

const IntroPage = ({ order }) => {

  const tiltRef = useRef(null)
  const {tiltingStyle, padding, rotator, divSize, fixedRatio1, MobileScreen, setRotator } = useContext(MyContext);
  const section = useRef(null);

  const iteration = useMemo(() => order + rotator, [order, rotator]);
  const scale = useMemo(() => Math.pow(fixedRatio1, iteration), [fixedRatio1, iteration]);
  const rotation = useMemo(() => 90 * iteration, [iteration]);

  const calculatedPadding = useMemo(() => {
    if (order === 0) return `${padding}rem`;
    if (padding === 0) return '';

    const adjustedPadding = padding * Math.pow(fixedRatio1, -iteration);
    return `${Math.min(adjustedPadding, padding * order)}rem`;
  }, [order, padding, fixedRatio1, iteration]);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current , tiltingStyle)
    if (section.current) {
      section.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
    //cleanup for tilt
    return () => tiltRef.current.vanillaTilt.destroy();
  }, [scale, rotation]);

  return (
    <div
      onClick={() => setRotator(order * -1)}
      ref={section}
      style={{ padding: calculatedPadding }}
      className={` ${rotation < -90 ? 'hidden' : ''} ${MobileScreen ? 'custom-transform-origin2' : 'custom-transform-origin1'}`}
    >
      <Sections />
      <div 
      ref={tiltRef}
      className='glassmorphism -gradient h-full w-full rounded-2xl'>
        <div className={`${divSize ? 'h-screen' : 'h-full'} ${iteration === order ? 'visible' : 'hidden'} w-full`}>
          {/* Content here */}
          <h1>sdfsfjasifjw</h1>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
