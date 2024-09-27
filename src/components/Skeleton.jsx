import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './sectionStyle.css';
import MyContext from '../context/MyContext';
import Sections from './Sections';
import NeumorphicTile from './NeumorphicTile';

const Skeleton = ({ order }) => {
  const { vibrantDarkColors, vibrantColors, theme, padding, rotator, fixedRatio1, MobileScreen, setRotator } = useContext(MyContext);
  const sectionRef = useRef(null);

  const iteration = useMemo(() => order + rotator, [order, rotator]);
  const scale = useMemo(() => Math.pow(fixedRatio1, iteration), [fixedRatio1, iteration]);
  const rotation = useMemo(() => (MobileScreen ? -90 * iteration : 90 * iteration), [MobileScreen, iteration]);

  const calculatedPadding = useMemo(() => {
    if (order === 0) return `${padding}rem`;
    if (padding === 0) return '';
    const adjustedPadding = padding * Math.pow(fixedRatio1, -iteration);
    return `${Math.min(adjustedPadding, padding * order)}rem`;
  }, [order, padding, fixedRatio1, iteration]);

  useEffect(() => {
    if (sectionRef.current) {
      // Animate scale and rotation using Framer Motion
      sectionRef.current.style.setProperty('--scale', scale);
      sectionRef.current.style.setProperty('--rotation', rotation);
    }
  }, [scale, rotation]);

  // Conditional classes for text, buttons, and images
  const textVisibility = useMemo(() => {
    if (MobileScreen) return rotation < -45 && rotation > -135 ? 'visible rotate-90' : 'hidden';
    return rotation > 45 && rotation < 135 ? 'visible' : 'hidden';
  }, [rotation, MobileScreen]);

  const nextButtonVisibility = useMemo(() => {
    if (MobileScreen) return rotation < -135 && rotation > -225;
    return rotation > 135 && rotation < 225;
  }, [rotation, MobileScreen]);

  const prevButtonVisibility = useMemo(() => {
    if (MobileScreen) return rotation < -315 && rotation > -405;
    return rotation > 315 && rotation < 405;
  }, [rotation, MobileScreen]);

  const imageVisibility = useMemo(() => {
    if (MobileScreen) return rotation < -225 && rotation > -315 ? 'visible rotate-[-90deg]' : 'hidden';
    return rotation > 225 && rotation < 315 ? 'visible' : 'hidden';
  }, [rotation, MobileScreen]);

  return (
    <motion.div
      onClick={() => setRotator(order * -1)}
      ref={sectionRef}
      style={{ padding: calculatedPadding }}
      className={`${MobileScreen ? (rotation < 110 ? '' : 'hidden') : (rotation < -90 ? 'hidden' : '')} ${MobileScreen ? 'custom-transform-origin2' : 'custom-transform-origin1'}`}
      animate={{
        scale: scale,
        rotate: rotation,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <Sections />
      <div className='h-full w-full rounded-2xl glassmorphism p-0'>
        {/* Text Rotation */}
        <div className={`${theme ? vibrantColors[order] : vibrantDarkColors[order]} h-full w-full flex justify-center items-center ${MobileScreen ? '' : ' rotate-[-90deg]'} ${textVisibility}`}>
          <h1 className='text-2xl'>Text Here!</h1>
        </div>

        {/* Next Button */}
        <NeumorphicTile
          light={MobileScreen ? 1 : 2}
          visible={nextButtonVisibility}
          theme={theme}
          size={200}
          padding={80}
          rotation={MobileScreen ? 180 : 0}
          order={order}
        />

        {/* Previous Button */}
        <NeumorphicTile
          light={MobileScreen ? 3 : 0}
          prev={true}
          visible={prevButtonVisibility}
          theme={theme}
          size={200}
          padding={80}
          rotation={MobileScreen ? 180 : 0}
          order={order}
        />

        {/* Image */}
        <img className={`${imageVisibility} h-full w-full object-cover rotate-90`} src={`/images/${order - 2}.gif`} alt='' />
      </div>
    </motion.div>
  );
};

export default Skeleton;
