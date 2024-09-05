import React, { useContext, useEffect, useRef, useMemo } from 'react';
import './sectionStyle.css';
import MyContext from '../context/MyContext';
import Sections from './Sections';

const Donation = ({ order }) => {
  const { padding, rotator, divSize, fixedRatio1, MobileScreen, setRotator } = useContext(MyContext);
  const section = useRef(null);

  // Calculating the rotation factor, scaling, and rotation using useMemo
  const { iteration, scale, rotation } = useMemo(() => {
    const iteration = order + rotator;
    const scale = Math.pow(fixedRatio1, iteration);
    const rotation = 90 * iteration;
    return { iteration, scale, rotation };
  }, [order, rotator, fixedRatio1]);

  // Calculating the padding using useMemo
  const calculatedPadding = useMemo(() => {
    if (order === 0) return `${padding}rem`;
    if (padding === 0) return '';

    const adjustedPadding = padding * Math.pow(fixedRatio1, -iteration);
    return `${Math.min(adjustedPadding, padding * order)}rem`;
  }, [order, padding, fixedRatio1, iteration]);

  useEffect(() => {
    console.log('====================================');
    console.log(calculatedPadding);
    console.log('====================================');
    // Apply transformation after component is mounted or updated
    if (section.current) {
      section.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
  }, [scale, rotation]);

  return (
    <div
      onClick={() => setRotator(order * -1)}
      ref={section}
      style={{ padding: calculatedPadding }}
      className={`page7 ${rotation < -90 ? 'hidden' : ''} ${MobileScreen ? 'custom-transform-origin2' : 'custom-transform-origin1'}`}
    >
      <Sections />
      <div className='glassmorphism lassmorphism-gradient  h-full w-full rounded-2xl bg--600'>
        <div className={`${divSize ? 'h-screen' : 'h-full'} ${iteration === order ? 'visible' : 'hidden'} w-full`}>
          {/* Content here */}
        </div>
      </div>
    </div>
  );
};

export default Donation;
