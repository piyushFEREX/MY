import React, { useContext, useEffect, useRef } from 'react';
import MyContext from './context/MyContext';
import NavBar from './components/NavBar';
import Skeleton from './components/Skeleton';

const App = () => {
  const {FullHeight,  rotator, setdivSize,settheme ,  theme, setMobileScreen, setRotator, setOpacity } = useContext(MyContext);

  const SCROLL_THRESHOLD = 30;
  const DECIMAL_PLACES = 1;
  const MIN_LIMIT = -7;
  const MAX_LIMIT = 2;
  
  // Function to detect system theme
  const detectSystemTheme = () => {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  settheme(!darkMode);
  };
  const parent = useRef(null)
  useEffect(() => {
    if(parent.current){
      parent.current.style.height= FullHeight+'px'
    }
    detectSystemTheme();
    if (window.innerHeight < window.innerWidth * 0.618033) {
      setdivSize(true);
    }
    if (window.innerWidth < window.innerHeight) {
      setMobileScreen(true);
    }



  // scroll handing function for wheel event
    const handleScroll = (event) => {
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
    };

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

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', keyPress);
    window.addEventListener('keyup', keyRelease);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', keyPress);
      window.removeEventListener('keyup', keyRelease);
    };
  }, [rotator, setdivSize, setMobileScreen, setRotator, setOpacity]);

  // const openFullscreen = () => {
  //   const elem = document.documentElement;
  //   if (elem.requestFullscreen) {
  //     elem.requestFullscreen();
  //   } else if (elem.mozRequestFullScreen) {
  //     elem.mozRequestFullScreen();
  //   } else if (elem.webkitRequestFullscreen) {
  //     elem.webkitRequestFullscreen();
  //   } else if (elem.msRequestFullscreen) {
  //     elem.msRequestFullscreen();
  //   }
  // };

  // const closeFullscreen = () => {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  //   } else if (document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  //   } else if (document.msExitFullscreen) {
  //     document.msExitFullscreen();
  //   }
  // };

  return (
    <div
    ref={parent}
     className={`${theme ? 'AnimatorGradientLight' : 'AnimatorGradientDark'} mainDiv w-screen overflow-hidden text-white relative`}>
      <NavBar />
      {/* <button
        onClick={() => {
          if (document.fullscreenElement) {
            closeFullscreen();
          } else {
            openFullscreen();
          }
        }}
        className="absolute z-40 top-4 right-4 bg-blue-500 text-white p-2 rounded"
      >
        Toggle Fullscreen
      </button> */}
      <Skeleton order={0} />
      <Skeleton order={1} />
      <Skeleton order={2} />
      <Skeleton order={3} />
      <Skeleton order={4} />
      <Skeleton order={5} />
      <Skeleton order={6} />
    </div>
  );
};

export default App;
