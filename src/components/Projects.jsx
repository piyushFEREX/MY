import React, { useContext, useEffect, useRef, useMemo } from 'react';
import './sectionStyle.css';
import MyContext from '../context/MyContext';
import Sections from './Sections';

const Projects = ({ order }) => {
  const { rotator, padding, divSize, fixedRatio1, MobileScreen, setRotator } = useContext(MyContext);
  const section = useRef(null);

  // Memoizing iteration, scale, and rotation to avoid unnecessary calculations
  const iteration = useMemo(() => order + rotator, [order, rotator]);
  const scale = useMemo(() => Math.pow(fixedRatio1, iteration), [fixedRatio1, iteration]);
  const rotation = useMemo(() => 90 * iteration, [iteration]);

  // Memoizing padding calculation
  const paddingStyle = useMemo(() => {
    if (order === 0) return `${padding}rem`;
    if (padding === 0) return '';

    const adjustedPadding = padding * Math.pow(fixedRatio1, -iteration);
    return `${Math.min(adjustedPadding, padding * order)}rem`;
  }, [order, padding, fixedRatio1, iteration]);

  // Apply transformation when component mounts or updates
  useEffect(() => {
    if (section.current) {
      section.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
  }, [scale, rotation]);

  return (
    <div
      onClick={() => setRotator(order * -1)}
      ref={section}
      style={{ padding: paddingStyle }}
      className={` ${rotation < -90 ? 'hidden' : ''} ${MobileScreen ? 'custom-transform-origin2' : 'custom-transform-origin1'}`}
    >
      <Sections />
      <div className='h-full w-full rounded-2xl glassmorphism lassmorphism-gradient '>
        <div className={`${divSize ? 'h-screen' : 'h-full'} ${iteration === order ? 'visible' : 'hidden'} w-full`}>
          {/* Content here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
