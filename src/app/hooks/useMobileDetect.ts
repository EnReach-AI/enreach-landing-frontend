import { useState, useLayoutEffect } from "react";

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  const getWindowWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const handleResize = () => {
    setIsMobile(getWindowWidth() <= 900);
  };
  const isBrowser = typeof window !== "undefined";

  useLayoutEffect(() => {
    if (!isBrowser) return;
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobileDetect;