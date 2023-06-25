import React, { useState} from 'react'
import './HeaderSection.css'
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png'
import {RiMenu4Line,RiCloseCircleLine} from 'react-icons/ri'

export const Navbar = () => {
    const [menuVisible,setmenuVisible] = useState(false)
    return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <div className={menuVisible ? 'icons-right hidden' : "icons-right"}>
            <Link to={'/signup'}>SignUp</Link>
            <button id='menuBarLines' onClick={()=>{setmenuVisible(!menuVisible)}}><RiMenu4Line /></button>
        </div>
        
        {menuVisible &&
        
        <div className='hiddenMenu'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>About us</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/'}>Contact</Link></li>
            </ul>
            <button id='menuBarX' onClick={()=>{setmenuVisible(false)}}><RiCloseCircleLine /></button>
        </div>
        }  
        
    </div>
    )
}
