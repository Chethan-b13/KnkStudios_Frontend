import React, { useState} from 'react'
import './HeaderSection.css'
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png'
import {RiMenu4Line,RiCloseCircleLine} from 'react-icons/ri'
import { useSelector } from 'react-redux';

export const Navbar = (props) => {
    const [menuVisible,setmenuVisible] = useState(false);
    const user = useSelector((state)=>state.auth);
    console.log(user);
    return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <div className={menuVisible ? 'icons-right hidden' : "icons-right"}>
            { user.isAuthenticated ?
            <Link to={'/'}>{user.userDetails.name}-{user.userDetails.team}</Link>
            : props.swap ? <Link to={'/login'}>Login</Link> : <Link to={'/signup'}>SignUp</Link>
            }
            <button id='menuBarLines' onClick={()=>{setmenuVisible(!menuVisible)}}><RiMenu4Line /></button>
        </div>
        
        {menuVisible &&
        
        <div className='hiddenMenu'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>About us</Link></li>
                {
                user.isAuthenticated ? <li><Link to={'/signup'}>Logout</Link></li>
                : props.swap? <li><Link to={'/signup'}>Signup</Link></li> :<li><Link to={'/login'}>Login</Link></li>
                }
                {
                    user.userDetails.is_superuser && <li><Link to={'/'}>Admin</Link></li>
                }
                <li><Link to={'/'}>Contact</Link></li>
            </ul>
            <button id='menuBarX' onClick={()=>{setmenuVisible(false)}}><RiCloseCircleLine /></button>
        </div>
        }  
        
    </div>
    )
}
