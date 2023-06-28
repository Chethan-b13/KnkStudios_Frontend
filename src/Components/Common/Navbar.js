import React, { useState} from 'react'
import './HeaderSection.css'
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png'
import {RiMenu4Line,RiCloseCircleLine} from 'react-icons/ri'

export const Navbar = (props) => {
    const [menuVisible,setmenuVisible] = useState(false)
    return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <div className={menuVisible ? 'icons-right hidden' : "icons-right"}>
            { props.swap ? <Link to={'/login'}>Login</Link> : <Link to={'/signup'}>SignUp</Link>}
            <button id='menuBarLines' onClick={()=>{setmenuVisible(!menuVisible)}}><RiMenu4Line /></button>
        </div>
        
        {menuVisible &&
        
        <div className='hiddenMenu'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>About us</Link></li>
                {props.swap? <li><Link to={'/signup'}>Signup</Link></li> :<li><Link to={'/login'}>Login</Link></li>}
                <li><Link to={'/'}>Contact</Link></li>
            </ul>
            <button id='menuBarX' onClick={()=>{setmenuVisible(false)}}><RiCloseCircleLine /></button>
        </div>
        }  
        
    </div>
    )
}
