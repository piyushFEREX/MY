import React, { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider =({children})=>{
    const [rotator, setRotator] = useState(0);
    const [Opacity, setOpacity] = useState(false);
    const [MobileScreen, setMobileScreen] = useState(false)
    const [theme, settheme] = useState(true)
    const [divSize, setdivSize] = useState(false)
    const [neoTileRotation,setneoTileRotation] = useState()
    const fixedRatio1 = 0.618033;
    const padding = .3;
    const vibrantColors = [
        'bg-red-600',  // Soft cyan for a smooth gradient
        'bg-sky-400',  // A touch of teal for depth
        'bg-pink-300',  // Soft pink for warmth
        'bg-blue-400',// A calm indigo for balance
        'bg-yellow-400',// Gentle yellow for contrast
        'bg-cyan-400',// Light purple for a soothing effect
        'bg-indigo-400'   // Cool blue for a refreshing feel
      ];
      const vibrantDarkColors = [
        'bg-red-500',   // Warm coral red for energy
        'bg-sky-500',   // Bright sky blue for vibrancy
        'bg-pink-500',  // Bold pink for accent and warmth
        'bg-blue-500',  // Electric blue for a cool, striking effect
        'bg-yellow-500',// Vivid yellow for contrast and brightness
        'bg-cyan-500',  // Vibrant cyan for a refreshing feel
        'bg-indigo-500' // Lively indigo for depth and richness
      ];
      
    return(
        <MyContext.Provider
        value={{
            vibrantDarkColors,
            neoTileRotation,
            vibrantColors,
            theme,
            padding,
            rotator,
            fixedRatio1,
            MobileScreen,
            Opacity,
            divSize,
            setneoTileRotation,
            settheme,
            setdivSize,
            setMobileScreen,
            setRotator,
            setOpacity,
        }}
        >
            {children}
        </MyContext.Provider>
    )

}
export default MyContextProvider;