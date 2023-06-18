import React from 'react'
import {useInView} from 'react-intersection-observer'
import './Home.scss'

const Card = (props) => {
  const stying = {backgroundImage:`url(${props.img})`}
  const {ref:myref , inView:elementVisible } = useInView()

  return (
    <div ref={myref} style={ stying } 
    className={`card ${elementVisible && 'OnVisibleAnimate-slow' }`}>
        <h3>{props.dstyle}</h3>
        <p>meow meow</p>
    </div>
  )
}

export default Card