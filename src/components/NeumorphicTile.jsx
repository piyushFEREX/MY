import React, { useContext, useState } from 'react';
import { RiArrowDownLine } from '@remixicon/react';
import MyContext from '../context/MyContext';

const NeumorphicTile = ({ light, prev, visible, theme, size, padding, rotation }) => {
  const [isHovered, setIsHovered] = useState(true); // Set initial hover state to false
  const { MobileScreen,rotator, setRotator } = useContext(MyContext);
  if(MobileScreen) rotation = rotation + 90
  const backgroundColor = theme ? '#f3f4f6' : '#2a2a2a';
  const shadowColorDark = theme ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)';
  const shadowColorLight = theme ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)';

  const neoShadows = {
    pop: [
      `10px 10px 20px ${shadowColorDark}, -10px -10px 20px ${shadowColorLight}`,
      `-10px 10px 20px ${shadowColorDark}, 10px -10px 20px ${shadowColorLight}`,
      `-10px -10px 20px ${shadowColorDark}, 10px 10px 20px ${shadowColorLight}`,
      `10px -10px 20px ${shadowColorDark}, -10px 10px 20px ${shadowColorLight}`
    ],
    push: [
      `inset 10px 10px 20px ${shadowColorDark}, inset -10px -10px 20px ${shadowColorLight}`,
      `inset -10px 10px 20px ${shadowColorDark}, inset 10px -10px 20px ${shadowColorLight}`,
      `inset -10px -10px 20px ${shadowColorDark}, inset 10px 10px 20px ${shadowColorLight}`,
      `inset 10px -10px 20px ${shadowColorDark}, inset -10px 10px 20px ${shadowColorLight}`
    ]
  };

  // Box-shadow for the "pressed in" look (initial state)
  const boxShadowPressed = neoShadows.push[light];

  // Box-shadow for the "popped out" look on hover
  const boxShadowNormal = neoShadows.pop[light];

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent click event from propagating
    if (prev) {
      if (rotator < 2) {
        setRotator(preVal => Math.floor(preVal+1));
      }
    } else {
      if (rotator > -7) {
        setRotator(preVal => Math.floor(preVal-1));
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`h-full w-full flex justify-center items-center ${visible ? 'visible' : 'hidden'} ${theme ? 'bg-gray-100' : 'bg-gray-800'}`}
    >
      <div
        style={{
          transform: `rotate(${rotation}deg) scale(${isHovered ? 1.05 : 1})`, // Combine rotation and scaling
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: padding + '%',
          width: padding + '%',
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
