import React, { useState} from 'react'
import './HeaderSection.css'
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../Assets/logo.png'
import {RiMenu4Line,RiCloseCircleLine} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../ReduxStores/AuthSlice';
import { useLocation } from 'react-router-dom'

export const Navbar = (props) => {
    const [menuVisible,setmenuVisible] = useState(false);
    const dispatch = useDispatch()
    const location = useLocation();
    const user = useSelector((state)=>state.auth);

    console.log(user);
    return (
    <div className={props.background ? 'navbar_background' : 'navbar'}>
        <img className='navbar_img' src={logo} alt="kalanidhi kala studios logo" />
        <div className={menuVisible ? 'icons-right hidden' : "icons-right"}>
            { user.isAuthenticated ? location.pathname==='/profile'? <Link to={'/'}>Home</Link>
            : <Link to={'/profile'}>Profile</Link>
            : location.pathname==='/' ? <Link to={'/login'}>Login</Link>:<Link to={'/'}>Home</Link>
            }
            <button id='menuBarLines' onClick={()=>{setmenuVisible(!menuVisible)}}><RiMenu4Line /></button>
        </div>
        
        {menuVisible &&
        
        <div className='hiddenMenu'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>About us</Link></li>
                {
                user.isAuthenticated ? <li onClick={dispatch(logout())}><a href='/'>Logout</a></li>
                : location.pathname==='/login'? <li><Link to={'/signup'}>Signup</Link></li> :<li><Link to={'/login'}>Login</Link></li>
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
