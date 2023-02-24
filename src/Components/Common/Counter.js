import React,{useRef} from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import '../Pages/Home.scss'
import './Counter.css'

const count = (social_media , end) =>{
  return (
    <div className="numbers">
      <h1><CountUp start={0} end={end} duration={2} delay={0}/></h1>
      <p>{social_media}</p>
    </div>
  );
}

function Counter () {
  const {ref:myref , inView:elementVisible } = useInView()
    const numbers = {
        Instagram : 25722,
        Youtube : 18457,
        Josh : 100000,
        Overall : 150000
    }
  return (
    <div ref={myref} className="contentContainer">
        <h1 className='contentH1'>Our Audience</h1>
        {
          elementVisible &&
          <div className="Columns4">
            
            {Object.keys(numbers).map((key) => {
                return (count(key, numbers[key]))
                 })}
          </div>
        }
        
    </div>
  );
}

export default Counter;