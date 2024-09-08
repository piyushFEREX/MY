import React, { useContext, useEffect, useMemo, useRef } from 'react';
import './sectionStyle.css';
import MyContext from '../context/MyContext';
import Sections from './Sections';
import NeumorphicTile from './NeumorphicTile';


const Skeleton = ({ order }) => {


  const {vibrantColors,theme, padding, rotator, fixedRatio1, MobileScreen, setRotator } = useContext(MyContext);
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
    console.log(iteration , rotation ,)
    if (section.current) {
      section.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }

  }, [scale, rotation]);

  return (
    <div
      onClick={() => setRotator(order * -1)}
      ref={section}
      style={{ padding: calculatedPadding }}
      className={`${rotation < -90 ? 'hidden' : ''} ${MobileScreen ? 'custom-transform-origin2' : 'custom-transform-origin1 '} `}>
      <Sections />
      <div className='h-full w-full rounded-2xl glassmorphism p-0'>
        {/* //text on 90deg rotation */}
        <div className={`${vibrantColors[order]} h-full w-full  flex justify-center items-center rotate-[-90deg] ${rotation > 45 && rotation < 135 ? 'visible' : 'hidden'}`}>
          <h1 className='text-2xl'>Text Here!</h1>
        </div>
        {/* //text on 90deg rotation */}
  {/* next button  */}
       <NeumorphicTile visible={rotation > 135 && rotation < 225 ? true : false} theme={theme} size={200}  padding={80}  rotation={180} order={order}/>
        {/* next button  */}
        {/* previous button  */}
        <NeumorphicTile prev={true} visible={rotation > 315 && rotation < 405 ? true : false} theme={theme} size={200}  padding={80}  rotation={180} order={order}/>
        {/* previous button  */}
        <img className={`${rotation > 225 && rotation < 315 ? 'visible' : 'hidden'} h-full w-full rotate-90 `} src={`public/images/${order-2}.gif`} alt=''></img>
      </div>
    </div>


  );
};

export default Skeleton;
