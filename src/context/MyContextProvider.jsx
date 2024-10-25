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
            VidSrc:'https://videos.pexels.com/video-files/5538137/5538137-hd_1920_1080_25fps.mp4',
            live:false,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet ornare gravida. Phasellus dolor quam, viverra eget urna et, luctus consequat justo. Mauris at felis a tortor faucibus maximus.',
            link:'',
            Heading:'Angry Bird🐥',
        }
      ]

      //ye dikha rha hai ki next tile pe kya ky aaane wala hai,
      const NextContent=[
        <h1 className="text-3xl">Keep Scrolling😃🖱️</h1>,
        <Socials size={MobileScreen? 20 : 30}/>,
        <Stack heading={'Angry Bird'} tech={['ejs','mongoDB','nodeJSd','passportJS']}/>,
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