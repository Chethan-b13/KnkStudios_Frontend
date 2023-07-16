import React, { useEffect } from 'react'
import { Navbar } from '../../Common/Navbar'
import './profile.scss'
import goal from '../../../Assets/goal.png'
import ProfileFollowersCounter from './FollowersCounter'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    
    const user = useSelector((state)=>state.auth) 
    const navigate = useNavigate()
    const numbers = {
        Instagram : 20000,
        Josh : 1000000,
        Overall : 1020000
      }

    useEffect(() => {
      if(!user.isAuthenticated){
        return navigate('/login')
      }
    }, [])
    

    
    return (
        <>
        <Navbar background={true}/>
        <div className="intro">
            <div className="Container">
                <div className="imageContainer">
                    <img src={user.userDetails.avatar} alt={user.userDetails.name} />
                </div>
            </div>
            <div className="profileInfo">
                <h1>{user.userDetails.name} {user.userDetails.team}</h1>
                <ProfileFollowersCounter numbers={numbers} />
            </div>
        </div>
        <div className="achievement">
            <img src={goal} alt="" />
            <div className="columns">
                <h1>56</h1>
                <h4>Competitions</h4>
            </div>
            <div className="columns border-left">
                <h1>25</h1>
                <h4>Prizes Bagged</h4>
            </div>
            <div className="columns border-left">
                <h1>5</h1>
                <h4>choreography</h4>
            </div>
        </div>
        </>
    )
}

export default Profile