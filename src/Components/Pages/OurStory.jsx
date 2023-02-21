import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import video from '../../Assets/video6.mp4'
import {RxSpeakerLoud,RxSpeakerOff} from 'react-icons/rx'
import './Home.scss'

const OurStory = () => {
    const [muted, setmuted] = useState(true)
  const {ref:myref , inView:elementVisible } = useInView()

  return (
    <div ref={myref} className={`StoryConTainer ${elementVisible && 'OnVisibleAnimate-fast' }`}>
      <div id="storyVideoConatiner">
        <video autoPlay muted={muted} loop>
        <source src={video} type="video/mp4" />
      </video>
      <button onClick={()=>{setmuted(!muted)}} >{muted?<RxSpeakerOff/>:<RxSpeakerLoud/>}</button>
      </div>
      <div className="TextContent">
        <h1 className="contentH1">Our Story</h1>
        <p>
          Kalandhi Studiois warm and welcoming to all who enter! My partner and
          I have been wanting to learn to dance and finally, despite all of our
          nerves and worries about dancing in a public setting, were put to rest
          when we started class! courtesy staff and immediately response. Great
          classes, helpful and inviting staff. Awesome work out where I can
          laugh at myself and learn something new as well.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
