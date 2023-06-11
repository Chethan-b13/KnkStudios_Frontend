import React, { useState } from 'react'
import video from '../../Assets/video6.mp4'
import './HeaderSection.css'
import {Link} from 'react-router-dom'
import { Navbar } from './Navbar'
import {RxSpeakerLoud,RxSpeakerOff} from 'react-icons/rx'
import { SlSocialInstagram,SlSocialFacebook } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import Apply from './Application/Apply'

export const HeaderSection = () => {

  const [muted, setmuted] = useState(true)
  const [ShowModal, setShowModal] = useState(false)

  return (
    <div className='header'>
        <video autoPlay muted={muted} loop>
          <source src={video} type="video/mp4" />
        </video>
        <Navbar />

        <div className="headerContent">
          <h1>BE A PART OF US</h1>
          <button onClick={()=>{setShowModal(!ShowModal) }}>Apply Now</button>
        </div>

        {
          ShowModal && <Apply ShowModal={ShowModal} setShowModal={setShowModal}/>
        }

        <div className="SocialIcons">
           <Link to={'https://www.instagram.com/ck6_officials/'} target="_blank"><span><SlSocialInstagram/></span></Link>
           <Link to={'https://www.youtube.com/@kalanidhikalastudio'} target="_blank"><span><TiSocialYoutube/></span></Link>
           <Link to={'https://www.facebook.com/KalanidhiKalastudio/'} target="_blank"><span><SlSocialFacebook/></span></Link>
        </div>
        <button onClick={()=>{setmuted(!muted)}} className="soundIcon">{muted?<RxSpeakerOff/>:<RxSpeakerLoud/>}</button>
    </div>
  )
}