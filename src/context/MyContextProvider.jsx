import React, { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider =({children})=>{
    const [rotator, setRotator] = useState(0);
    const [Opacity, setOpacity] = useState(false);
    const [MobileScreen, setMobileScreen] = useState(false)
    const [divSize, setdivSize] = useState(false)
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
    return(
        <MyContext.Provider
        value={{
            vibrantColors,
            padding,
            rotator,
            fixedRatio1,
            MobileScreen,
            Opacity,
            divSize,
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