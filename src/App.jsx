import React, { useContext, useEffect } from 'react'
import MyContext from './context/MyContext'
import NavBar from './components/NavBar';
import Skeleton from './components/Skeleton';

const App = () => {
  const {rotator,setdivSize,theme,setMobileScreen,setRotator,setOpacity}= useContext(MyContext);

  
  const SCROLL_THRESHOLD = 30;
  const DECIMAL_PLACES = 1;
  const MIN_LIMIT = -7;
  const MAX_LIMIT = 2;
// console.log(MIN_LIMIT);
  useEffect(() => {
    // console.log(window.innerHeight , window.innerWidth)
    // console.log(theme , 'from app')
    if(window.innerHeight<window.innerWidth* 0.618033){
      setdivSize(true)
    }
    if(window.innerWidth<window.innerHeight){
      setMobileScreen(true)
    }
    // Custom function to handle manual scrolling
    const handleScroll = (event) => {
      const delta = event.deltaY;
      // console.log('The value of event deltaY is : ',event.deltaY);
      if (Math.abs(delta) >= SCROLL_THRESHOLD) {
        const increment = Math.sign(delta) * -0.1;
        setRotator((prevRotator) => {
          const newValue = Math.min(Math.max(prevRotator + increment, MIN_LIMIT), MAX_LIMIT);
          // console.log('one time ');
          return parseFloat(newValue.toFixed(DECIMAL_PLACES));
        });
      } else {
        setRotator((prevRotator) => Math.round(prevRotator));
      }

      event.preventDefault();
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    // window.addEventListener('touchmove', handleScroll, { passive: false });f

    const keyPress = (event) => {
      setOpacity(true);
      if (
        (event.key === 'w' || event.key === 'd' || event.key === 'W' || event.key === 'D' || event.key === 'ArrowUp' || event.key === 'ArrowRight') &&
        rotator > MIN_LIMIT
      ) {
        setRotator((prevRotator) => prevRotator - 1);
      } else if (
        (event.key === 's' || event.key === 'a' || event.key === 'S' || event.key === 'A' || event.key === 'ArrowDown' || event.key === 'ArrowLeft') &&
        rotator < MAX_LIMIT
      ) {
        setRotator((prevRotator) => prevRotator + 1);
      }
    };

    const keyRelease = () => {
      setOpacity(false);
    };

    window.addEventListener('keydown', keyPress);
    window.addEventListener('keyup', keyRelease);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', keyPress);
      window.removeEventListener('keyup', keyRelease);
    };
  }, [rotator]); // Added rotator as a dependency to update the effect when rotator changes



  return (
<div className={`${theme ? 'AnimatorGradientLight':'AnimatorGradientDark'} mainDiv h-screen w-screen overflow-hidden  text-white relative`}>
  {/* <div className={`overflow-hidden bg-red-600 w-screen ${MobileScreen ? 'h-[calc(100vw*1.618033)]' : 'h-[calc(100vw * 0.618033)]'}`}> */}
    <NavBar/>
    <Skeleton order={0}/>
    <Skeleton order={1}/>
    <Skeleton order={2}/>
    <Skeleton order={3}/>
    <Skeleton order={4}/>
    <Skeleton order={5}/>
    <Skeleton order={6}/>
  </div>
// </div>

  )
}

export default App