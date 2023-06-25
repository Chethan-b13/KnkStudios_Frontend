import React from 'react'
import './Home.scss'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const YtCard = () => {
    const ytUrls = [
        'https://www.youtube.com/embed/CguV7CpdW0M',
        'https://www.youtube.com/embed/mSfaVyze3Bc',
        "https://www.youtube.com/embed/qOJ5qKTtP_s",
        "https://www.youtube.com/embed/9RLkKiWUZ4Q",
        'https://www.youtube.com/embed/CguV7CpdW0M'
    
      ]
  return (
    <div className="contentContainer">
        <h1 className="contentH1">Our Top Choreography </h1>
        <div className='ytCardContainer'>
            {ytUrls.map((url,i)=>{
            return <LazyLoadComponent>
                    <iframe key={i} className='card ytcard' width="25rem" height="15rem" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                  </LazyLoadComponent>
            })}
          
        </div>
      </div>
    
  )
}

export default YtCard