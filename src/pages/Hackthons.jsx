import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import SingleData from "../components/SingleData";
import { useEffect, useState } from "react";

const Hackthons = () => {
  const data = useLoaderData();
  console.log(data)

  const [animationRunning, setAnimationRunning] = useState(true);

  const stopAnimation = () => {
    setAnimationRunning(false);
  }

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      stopAnimation();
    }, 3000);

    return () => {
      clearTimeout(animationTimeout);
    }
  }, [])

  return (
    <div>
      <div className="my-40">
        <h2 className={`text-5xl text-center my-5 ml-5 ${animationRunning ? 'animate-bounce' : ''}`}>LEARN.BUILD.SHARE</h2>
        <Banner></Banner>
      </div>
      <div className="flex flex-col">
        {
          data.map(d => <SingleData key={d.blogId} d={d}></SingleData>)
        }
      </div>
    </div>
  );
};

export default Hackthons;