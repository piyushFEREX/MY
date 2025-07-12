import React, { useCallback, useContext, useEffect, useRef } from 'react';
import MyContext from './context/MyContext';
import NavBar from './components/NavBar';
import Skeleton from './components/Skeleton';
import Intro from './components/pages/Intro';
import Socials from './components/Socials'
import Visual from './components/pages/Visual';
// Utility functions for debounce and throttle
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return (...args) => {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

const App = () => {
  const { 
    togglebutt, setlandscapeFlotingNav, landscapeFlotingNav, setRotator, settheme, 
    theme, MobileScreen, setMobileScreen, setOpacity ,FullHeight
  } = useContext(MyContext);

  const SCROLL_THRESHOLD = 30;
  const DECIMAL_PLACES = 1;
  const MIN_LIMIT = -7;
  const MAX_LIMIT = 2;
  const WHEEL_END_TIMEOUT = 300;

  const parent = useRef(null);
  const touchStartY = useRef(0);
  const scrollEndTimeout = useRef(null);

  // Function to detect system theme
  const detectSystemTheme = useCallback(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    settheme(!darkMode);
  }, [settheme]);

  // Wheel scroll handling (for desktop)
  const handleScroll = useCallback((event) => {
    const delta = event.deltaY;
    if (Math.abs(delta) >= SCROLL_THRESHOLD) {
      const increment = Math.sign(delta) * -0.18;
      setRotator((prevRotator) => {
        const newValue = Math.min(Math.max(prevRotator + increment, MIN_LIMIT), MAX_LIMIT);
        return parseFloat(newValue.toFixed(DECIMAL_PLACES));
      });
    }

    // Wheel end handling
    if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    scrollEndTimeout.current = setTimeout(() => {
      setRotator((prevRotator) => Math.round(prevRotator));
    }, WHEEL_END_TIMEOUT);

    event.preventDefault();
  }, [setRotator]);

  // Touch scroll handling (for mobile)
  const handleTouchStart = useCallback((event) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((event) => {
    const touchEndY = event.touches[0].clientY;
    const delta = touchEndY - touchStartY.current;

    // Only update if movement is significant
    if (Math.abs(delta) >= SCROLL_THRESHOLD) {
      const increment = Math.sign(delta) * 0.5;
      setRotator((prevRotator) => {
        const newValue = Math.min(Math.max(prevRotator + increment, MIN_LIMIT), MAX_LIMIT);
        return parseFloat(newValue.toFixed(DECIMAL_PLACES));
      });
      touchStartY.current = touchEndY;  // Update for next move
    }
  }, [setRotator]);

  // Handle touch end (smooth rounding)
  const handleTouchEnd = useCallback(() => {
    setRotator((prevRotator) => {
      const roundedValue = Math.round(prevRotator);
      return Math.min(Math.max(roundedValue, MIN_LIMIT), MAX_LIMIT);
    });
  }, [setRotator]);

  // Key press handler
  const keyPress = useCallback((event) => {
    setOpacity(true);

    const isIncrementKey = ['s', 'a', 'S', 'A', 'ArrowDown', 'ArrowLeft'].includes(event.key);
    const isDecrementKey = ['w', 'd', 'W', 'D', 'ArrowUp', 'ArrowRight'].includes(event.key);

    if (isIncrementKey) {
      setRotator((prevRotator) => Math.floor(prevRotator + 1));
    } else if (isDecrementKey) {
      setRotator((prevRotator) => Math.floor(prevRotator - 1));
    }
  }, [setOpacity, setRotator]);

  const keyRelease = useCallback(() => {
    setOpacity(false);
  }, [setOpacity]);

  useEffect(() => {
    console.log('rerendered');

    detectSystemTheme();

    if (parent.current) {
      parent.current.style.height = '100vh';
    }

    if (window.innerWidth < window.innerHeight) {
      setMobileScreen(true);
    }

    // Debounced resize handler
    const debouncedResize = debounce(() => setMobileScreen(window.innerWidth < window.innerHeight), 200);
    window.addEventListener('resize', debouncedResize);

    // Throttled scroll and touch handling
    const throttledHandleScroll = throttle(handleScroll, 100); // Throttle limit can be adjusted
    const throttledHandleTouchMove = throttle(handleTouchMove, 100); // Throttle limit can be adjusted

    window.addEventListener('wheel', throttledHandleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', throttledHandleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', keyPress);
    window.addEventListener('keyup', keyRelease);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('wheel', throttledHandleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', throttledHandleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', keyPress);
      window.removeEventListener('keyup', keyRelease);
    };
  }, [detectSystemTheme, handleScroll, handleTouchStart, handleTouchMove, keyPress, keyRelease]);

  // Simulated content
  const arr = [...Array(6)];
  arr.unshift(<Visual order={0} height={FullHeight}/>)
  arr.unshift(<Intro msg={'Keep Scrolling'} />);

  return (
    <div
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={parent}
      className={`${theme ? 'AnimatorGradientLight' : 'AnimatorGradientDark'} mainDiv w-screen overflow-hidden text-white relative`}
    >
      {/* //this is the overlay div that collapses the nav bar when clicked outside */}
      <div
        onClick={() => setlandscapeFlotingNav(prev => !prev)}
        className={`h-full bg-opacity-20 w-full absolute z-10 ${
          !MobileScreen ? (!landscapeFlotingNav ? (togglebutt ? '' : 'hidden') : 'hidden') : 'hidden'}`}
      >
      </div>
      <NavBar />
      {arr.map((_, i) => (<Skeleton order={i} page={_} key={i}/>))}
    </div>
  );
};

export default App;
