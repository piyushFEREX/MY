import React, { useState } from "react";
import MyContext from "./MyContext";
import Stack from "../components/Stack";
import Socials from "../components/Socials";

const MyContextProvider =({children})=>{
    const [togglebutt, settogglebutt] = useState(false)
    const [landscapeFlotingNav, setlandscapeFlotingNav] = useState(false)
    const [loading, setloading] = useState(true)
    const [rotator, setRotator] = useState(0);
    const [Opacity, setOpacity] = useState(false);
    const [MobileScreen, setMobileScreen] = useState(window.innerHeight>window.innerWidth)
    const [theme, settheme] = useState(true)
    const [divSize, setdivSize] = useState(false)
    const [neoTileRotation,setneoTileRotation] = useState()
    const [resized, setresized] = useState(false)
    const FullHeight = window.innerHeight;
    const FullWidth = window.innerWidth;
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
      const VideoPageContent=[
        {
VidSrc:'https://dms.licdn.com/playlist/vid/v2/D4D05AQGUGl9zJiaBtA/mp4-720p-30fp-crf28/mp4-720p-30fp-crf28/0/1694967169715?e=1752915600&v=beta&t=XIq4SabJMDPMNswBMz7zWRqAUQFmMGL93T4xG-aclPY',
live:false,
description:`Apologies for the inconvenience. Although I currently pursue development as a hobby alongside my existing commitments, I'm genuinely passionate about it and eager to take the next step. I'm actively looking for opportunities to turn this passion into a full-time role`,
link:'https://www.linkedin.com/posts/piyush7web_flappybird-gamedev-fullstackdev-activity-7109207743638454272-YQHu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjZrKcBFHti34PLdu5K1Enph4nRdDfOtXY',
Heading:'Angry Bird🐥',
        }
      ]

      //ye dikha rha hai ki next tile pe kya ky aaane wala hai,
      const NextContent=[
        <h1 className="text-3xl text-center font-semibold">Keep Scrolling😃🖱️<br/><br/>or use the buttons  🔼🔽</h1>,
        <Socials size={MobileScreen? 20 : 30}/>,
        <Stack heading={'Angry Bird'} tech={['EJS','MongoDB','Node','Passport']}/>,
      ]
    return(
        <MyContext.Provider
        value={{
            FullWidth,
            FullHeight,
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
            resized,
            loading,
            landscapeFlotingNav,
            togglebutt,
            VideoPageContent,
            NextContent,
            settogglebutt,
            setlandscapeFlotingNav,
            setloading,
            setresized,
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