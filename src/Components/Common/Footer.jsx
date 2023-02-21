import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import {BsFillTelephoneForwardFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className="Col4">
            <div className="flex-col cwhite col1">
                <h3>KalaNidhi Kala Studios</h3>
                <p>
                I have been wanting to learn to dance and finally, despite all of our
          nerves and worries about dancing in a public setting, were put to rest
          when we started class! courtesy staff and immediately response.
                </p>
                <br />

                <h3>Phone Number</h3>
                <p> <BsFillTelephoneForwardFill /> +91 8520696369</p>
            </div>
            <div className="flex-col cwhite col2">
                <h3>Explore</h3>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>About us</Link></li>
                    <li><Link to={'/'}>Login</Link></li>
                    <li><Link to={'/'}>Contact</Link></li>

                </ul>
            </div>
            <div className="flex-col cwhite col2">
            <h3>Dance Styles</h3>
                <ul>
                    <li><Link to={'/'}>Hip Hop</Link></li>
                    <li><Link to={'/'}>FreeStyle</Link></li>
                    <li><Link to={'/'}>BeBowing</Link></li>
                    <li><Link to={'/'}>Lock&Pop</Link></li>

                </ul>
            </div>
            <div className="flex-col cwhite col4">
            <h3>Our Updates</h3>
            <input type="text" name="" id="" />
            <button>SUBSCRIBE NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Footer