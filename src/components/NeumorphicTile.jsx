import React, { useState } from 'react';
import { RiArrowDownLine } from '@remixicon/react';

const NeumorphicTile = ({ visible, isLightTheme, size, padding, rotation }) => {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundColor = isLightTheme ? '#f3f4f6' : '#2a2a2a'; // Lighter shade for dark mode
  const shadowColorDark = isLightTheme ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)'; // Deeper shadow for dark mode
  const shadowColorLight = isLightTheme ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)'; // Softer light shadow in dark mode

  // Box-shadow for the "pressed in" look (initial state)
  const boxShadowPressed = `inset 10px 10px 20px ${shadowColorDark}, inset -10px -10px 20px ${shadowColorLight}`;

  // Box-shadow for the "popped out" look on hover
  const boxShadowNormal = `10px 10px 20px ${shadowColorDark}, -10px -10px 20px ${shadowColorLight}`;

  return (
    <div
      className={`${visible ? 'visible' : 'hidden'} h-full w-full flex justify-center items-center ${isLightTheme ? 'bg-gray-100' : 'bg-gray-800'}`}
    >
      <div
        style={{
          transform: `rotate(${rotation}deg) scale(${isHovered ? 1.05 : 1})`, // Combine rotation and scaling
          padding: `${padding*7}px`,
          borderRadius: '50%',
          background: `linear-gradient(145deg, ${backgroundColor}, ${backgroundColor})`,
          boxShadow: isHovered ? boxShadowNormal : boxShadowPressed, // Initially "pressed in" and "popped out" on hover
          transition: 'box-shadow 0.3s ease, transform 0.3s ease', // Smooth transition for both box-shadow and transform
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <RiArrowDownLine color={isLightTheme ? 'gray' : '#c0c0c0'} size={size} />
      </div>
    </div>
  );
};

export default NeumorphicTile;
