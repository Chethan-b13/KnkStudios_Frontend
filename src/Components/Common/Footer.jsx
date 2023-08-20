import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from '../../Assets/logo2.png'
import { SlSocialInstagram,SlSocialFacebook } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="Colums4">
        <div className="flex-col cwhite col1">
          <img width="10px" src={logo} alt="" />
          <p>
            I have been wanting to learn to dance and finally, despite all of
            our nerves and worries about dancing in a public setting.
          </p>
          <h3>Phone Number</h3>
          <p>
            <BsFillTelephoneForwardFill /> +91 85206 96369
          </p>
        </div>
        <div className="flex-col cwhite col2">
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>About us</Link>
            </li>
            <li>
              <Link to={"/"}>Login</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
          </ul>
        </div>
        <div className="flex-col cwhite col2">
          <h3>Dance Styles</h3>
          <ul>
            <li>
              <Link to={"/"}>Hip Hop</Link>
            </li>
            <li>
              <Link to={"/"}>FreeStyle</Link>
            </li>
            <li>
              <Link to={"/"}>BeBowing</Link>
            </li>
            <li>
              <Link to={"/"}>Lock&Pop</Link>
            </li>
          </ul>
        </div>
        <div className="flex-col cwhite col4">
          <h3>Our Updates</h3>
          <input type="text" name="" id="" />
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>
      <div className="copyRights">
        <h4>@Copyright chethan 2023. All Rights Reserved.</h4>
        <div className="ownerLinks">
            <Link className="cwhite"  to={'/'}><SlSocialInstagram /></Link>
            <Link className="cwhite" to={'/'}><SlSocialFacebook /></Link>
            <Link className="cwhite" to={'/'}><TiSocialYoutube /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
