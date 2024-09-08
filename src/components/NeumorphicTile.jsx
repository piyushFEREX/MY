import React, { useContext, useEffect, useState } from 'react';
import { RiArrowDownLine } from '@remixicon/react';
import MyContext from '../context/MyContext';

const NeumorphicTile = ({prev, visible, theme, size, padding, rotation }) => {
  const [isHovered, setIsHovered] = useState(true);
 const {rotator , setRotator}= useContext(MyContext)
  // useEffect(() => {
  //   console.log(theme);
  // }, [theme]);

  const backgroundColor = theme ? '#f3f4f6' : '#2a2a2a'; 
  const shadowColorDark = theme ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)'; 
  const shadowColorLight = theme ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)'; 

  const neoShadows ={
    pop:[
      `10px 10px 20px ${shadowColorDark}, -10px -10px 20px ${shadowColorLight}`,`-10px 10px 20px ${shadowColorDark},10px -10px 20px ${shadowColorLight}`,`-10px -10px 20px ${shadowColorDark},10px 10px 20px ${shadowColorLight}`,` 10px -10px 20px ${shadowColorDark},-10px 10px 20px ${shadowColorLight}`
    ],
    push:[
      `inset 10px 10px 20px ${shadowColorDark}, inset -10px -10px 20px ${shadowColorLight}`,`inset -10px 10px 20px ${shadowColorDark},inset 10px -10px 20px ${shadowColorLight}`,`inset -10px -10px 20px ${shadowColorDark},
inset 10px 10px 20px ${shadowColorLight}`,`inset 10px -10px 20px ${shadowColorDark},inset -10px 10px 20px ${shadowColorLight}`
    ]
  }

  // Box-shadow for the "pressed in" look (initial state)
  const boxShadowPressed = `inset 10px 10px 20px ${shadowColorDark}, inset -10px -10px 20px ${shadowColorLight}`;

  // Box-shadow for the "popped out" look on hover
  const boxShadowNormal = `10px 10px 20px ${shadowColorDark}, -10px -10px 20px ${shadowColorLight}`;

  return (
    <div
      onClick={(e)=>{
        e.stopPropagation(); 
        prev ? setRotator(rotator+1) : setRotator(rotator-1)            
                      }}
      className={`h-full w-full flex justify-center items-center ${visible ? 'visible' : 'hidden'} ${theme ? 'bg-gray-100' : 'bg-gray-800'}`}
    >
      <div
        style={{
          transform: `rotate(${rotation}deg) scale(${isHovered ? 1.05 : 1})`, // Combine rotation and scaling
          // padding: `${padding * 7}px`, 
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          height:padding +"%",
          width:padding +"%",
          borderRadius: '50%',
          background: `linear-gradient(145deg, ${backgroundColor}, ${backgroundColor})`,
          boxShadow: isHovered ? boxShadowNormal : boxShadowPressed, // Initially "pressed in" and "popped out" on hover
          transition: 'box-shadow 0.3s ease, transform 0.3s ease', // Smooth transition for both box-shadow and transform
        }}
        onMouseEnter={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(true)}
      >
        <RiArrowDownLine color={theme ? 'gray' : '#c0c0c0'} size={size} />
      </div>
    </div>
  );
};

export default NeumorphicTile;
