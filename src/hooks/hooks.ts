import { useEffect, useState } from "react";

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
    
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(document.documentElement.clientWidth);
      }
    
      window.addEventListener('resize', handleWindowResize);
    
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      }
    }, []);

    return windowWidth;
}


export const useWindowScrollY = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  return scroll;
}