import React from "react";
import { useInView } from "react-intersection-observer";
import image1 from "../../Assets/hiphop1.jpg";
import image2 from "../../Assets/bboying.jpg";
import image3 from "../../Assets/freeStyle.jpg";
import image4 from "../../Assets/gymnast.jpg";
import image5 from "../../Assets/popping.jpg";
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
          <Card dstyle="BeBowing" img={image2} />
          <Card dstyle="Lock & pop" img={image5} />
          <Card dstyle="gymnastics" img={image4} />
          <Card dstyle="FreeStyle" img={image3} />
        </div>
      </div>
      <Counter />
      <YtCard />
      <TopReels />
    </div>
  );
};

export default Content;
