import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const count = (social_media , end) =>{
  return (
    <div className="followers">
      <h1><CountUp start={0} end={end} duration={2} delay={0}/></h1>
      <p>{social_media}</p>
    </div>
  );
}

function ProfileFollowersCounter (props) {
  const {ref:myref , inView:elementVisible } = useInView()
  return (
    <div ref={myref}>
        {
          elementVisible &&
          <div className="followers_container">
            
            {Object.keys(props.numbers).map((key) => {
                return (count(key, props.numbers[key]))
                 })}
          </div>
        }
        
    </div>
  );
}

export default ProfileFollowersCounter;