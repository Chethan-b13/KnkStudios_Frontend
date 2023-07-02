import React from "react";
import { useInView } from "react-intersection-observer";
import image1 from "../../Assets/hiphop1.jpg";
import Counter from "../Common/Counter";
import Card from "./Card";


import "./Home.scss";
import OurStory from "./OurStory";
import YtCard from "./YtCard";
import TopReels from "./TopReels";

const Content = () => {
  
  const { ref: myref, inView: elementVisible } = useInView();
  

  return (
    <div>
      <OurStory />
      <div
        ref={myref}
        className={`contentContainer ${
          elementVisible && "OnVisibleAnimate-fast"
        }`}
      >
        <h1 className="contentH1">What we Do ?</h1>
        <div className="cardContainer">
          <Card dstyle="HipHop" img={image1} />
          <Card dstyle="BeBowing" img={image1} />
          <Card dstyle="Lock & pop" img={image1} />
          <Card dstyle="gymnastics" img={image1} />
          <Card dstyle="FreeStyle" img={image1} />
        </div>
      </div>
      <Counter />
      <YtCard />
      <TopReels />
    </div>
  );
};

export default Content;
