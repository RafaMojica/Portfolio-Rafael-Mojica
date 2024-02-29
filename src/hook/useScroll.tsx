import { useEffect, useState } from "react";

const useScroll = (scrollThreshold: number) => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollThreshold) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return scroll;
};

export default useScroll;
