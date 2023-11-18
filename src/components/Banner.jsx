import { useEffect, useState } from "react";


const Banner = () => {
  const [animationRunning , setAnimationRunning]= useState(true);

  useEffect(()=>{
    const stopAnimation = setTimeout(()=>{
      setAnimationRunning(false);
    },5000);

    return ()=>{
      clearTimeout(stopAnimation);
    }
  },[])


  return <>
    <img className={`w-3/4 rounded mx-auto mb-10 ${animationRunning?'animate-pulse':''}`} src="/assets/banner-1.jpg" alt="" />
  </>
};

export default Banner;