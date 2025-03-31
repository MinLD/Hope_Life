import { useEffect, useRef, useState } from "react";

const useScrollHandling = () => {
  const [scrollDriction, setScrollDriction] = useState<string>("");
  const previousScrollPosition = useRef<number>(0);
  const [scrollPosition, setScrollposition] = useState<number>(0);
// console.log(scrollPosition);
  const scrollTracking = () => {
    const currenScrollPosition = window.pageYOffset;


    if (currenScrollPosition > previousScrollPosition.current) {
      setScrollDriction("down");
    } else if (currenScrollPosition < previousScrollPosition.current) {
      setScrollDriction("up");
    }
    previousScrollPosition.current =
      currenScrollPosition <= 0 ? 0 : currenScrollPosition;
    setScrollposition(currenScrollPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);
  return {
    scrollDriction,
    scrollPosition,
  };
};

export default useScrollHandling;
