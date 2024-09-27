import React, { useCallback, useContext, useEffect, useRef } from 'react';
import MyContext from './context/MyContext';
import NavBar from './components/NavBar';
import Skeleton from './components/Skeleton';
import HamNav from './components/HamNav';

const App = () => {
  const { 
    togglebutt, setlandscapeFlotingNav,landscapeFlotingNav,loading,setloading,FullHeight, rotator, settheme, resized, setresized, 
    theme, MobileScreen, setMobileScreen, setRotator, setOpacity, Opacity 
  } = useContext(MyContext);

  const SCROLL_THRESHOLD = 30;
  const DECIMAL_PLACES = 1;
  const MIN_LIMIT = -7;
  const MAX_LIMIT = 2;
  
  const parent = useRef(null);

  // Function to detect system theme
  const detectSystemTheme = useCallback(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    settheme(!darkMode);
  }, [settheme])

  const handleScroll = useCallback((event) => {
    
    const delta = event.deltaY;
    if (Math.abs(delta) >= SCROLL_THRESHOLD) {
      const increment = Math.sign(delta) * -0.1;
      setRotator((prevRotator) => {
        const newValue = Math.min(Math.max(prevRotator + increment, MIN_LIMIT), MAX_LIMIT);
        return parseFloat(newValue.toFixed(DECIMAL_PLACES));
      });
    } else {
      setRotator((prevRotator) => Math.round(prevRotator));
    }
    event.preventDefault();
  }, [setRotator]);

  const keyPress = useCallback((event) => {
    // Debugging line
    // console.log('Key pressed:', event.key); 

    // Set opacity for visual feedback
    setOpacity(true);

    // Determine whether the key is for incrementing or decrementing
    const isIncrementKey = ['s', 'a', 'S', 'A', 'ArrowDown', 'ArrowLeft'].includes(event.key);
    const isDecrementKey = ['w', 'd', 'W', 'D', 'ArrowUp', 'ArrowRight'].includes(event.key);

    if (isIncrementKey && rotator < MAX_LIMIT) {
      setRotator((prevRotator) => Math.floor(prevRotator + 1));
    } else if (isDecrementKey && rotator > MIN_LIMIT) {
      setRotator((prevRotator) => Math.floor(prevRotator - 1));
    }
  }, [setOpacity, setRotator, rotator]);

  const keyRelease = useCallback(() => {
    setOpacity(false);
  }, [setOpacity]);

  const handleResize = useCallback(() => {
    setresized(true);
  }, [resized]);
  
  const pageload = useCallback(()=>{
    setTimeout(() => {
      setloading(false)
    }, 300);
  },[setloading])
  useEffect(() => {
    detectSystemTheme();
    // if(resized) { window.alert('The Page needs to be reloaded')}
    if (parent.current) {
      parent.current.style.height = `${FullHeight}px`;
    }
    if (window.innerHeight < window.innerWidth * 0.618033) {
  (true);
    }
    if (window.innerWidth < window.innerHeight) {
      setMobileScreen(true);
    }
    console.log('chala hai app render');
    
    // Add event listeners
    window.addEventListener('load',pageload)
    window.addEventListener('resize', handleResize);
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', keyPress);
    window.addEventListener('keyup', keyRelease);

    // Clean up event listeners
    return () => {
      window.removeEventListener('load',pageload)
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', keyPress);
      window.removeEventListener('keyup', keyRelease);
    };
  }, [detectSystemTheme,loading,resized]);

  return (
    <>  {loading ? (<h1 className='h-full w-full flex items-center justify-center'>loading....</h1>):( <div
      ref={parent}
      className={`${theme ? 'AnimatorGradientLight' : 'AnimatorGradientDark'} mainDiv w-screen overflow-hidden text-white relative`}
    >
      <button
       onClick={()=> setlandscapeFlotingNav(prev => !prev)}
      className='p-4 bg-red-600 text-white z-50 absolute top-0 left-[0%]'>CLICK FOR NAv</button>

      {!MobileScreen ? togglebutt?  <HamNav/>:'':''}

      <div 
       onClick={()=> setlandscapeFlotingNav(prev => !prev)}
      className={`h-full w-full absolute z-10 ${!MobileScreen ? landscapeFlotingNav ? 'hidden':'':'hidden'}`}>
        {/* for closing the nav on outside click  */}
      </div>
      <NavBar />
      {
        [...Array(9)].map((_,i)=> (<Skeleton order={i}  key={i}/>))
      }
    </div>)}</>
  );
};

export default App;
