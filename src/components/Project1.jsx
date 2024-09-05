import React, { useContext, useEffect, useMemo, useRef } from 'react';
import './sectionStyle.css';
import MyContext from '../context/MyContext';
import Sections from './Sections';

const Project1 = ({ order }) => {
  const { padding, rotator, divSize, fixedRatio1, MobileScreen, setRotator } = useContext(MyContext);
  const section = useRef(null);

  // Calculate iteration, scale, rotation, and padding using useMemo for performance optimization
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
    if (section.current) {
      section.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
  }, [scale, rotation]);

  return (
    <div
      onClick={() => setRotator(order * -1)}
      ref={section}
      style={{ padding: calculatedPadding }}
      className={`page1 ${rotation < -90 ? 'hidden' : ''} ${MobileScreen ? 'custom-transform-origin2' : 'custom-transform-origin1'}`}
    >
      <Sections />
      <div className=' h-full w-full rounded-2xl glassmorphism lassmorphism-gradient  '>
        <div className={`${divSize ? 'h-screen' : 'h-full'} ${iteration === order ? 'visible' : 'hidden'} w-full`}>
          {/* Content here */}
        </div>
      </div>
    </div>
  );
};

export default Project1;
