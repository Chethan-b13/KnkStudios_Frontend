import React from 'react'
import {useInView} from 'react-intersection-observer'
import './Home.scss'

const Card = (props) => {
  const stying = {
    backgroundImage:`url(${props.img})`,
    height: props.height ? props.height : '10rem',
    width: props.width ? props.width : '10rem'
  }
  const {ref:myref , inView:elementVisible } = useInView()

  return (
    <div ref={myref} style={ stying } 
    className={`card ${elementVisible && 'OnVisibleAnimate-slow' }`}>
        <h3>{props.dstyle}</h3>
        <p>Dance style</p>
    </div>
  )
}

export default Card