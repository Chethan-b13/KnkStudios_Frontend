import React, { useEffect } from 'react'
import { Navbar } from '../../Common/Navbar'
import './profile.scss'
import goal from '../../../Assets/goal.png'
import ProfileFollowersCounter from './FollowersCounter'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Card from '../Card'
import image1 from "../../../Assets/hiphop1.jpg";
import TopReels from '../TopReels'

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
        <div className="danceStyle">
            <Card dstyle="BBowing" img={image1} width="9rem" height="7rem" />
            <Card dstyle="Free Style" img={image1} width="9rem" height="7rem"/>
            <Card dstyle="Romance" img={image1} width="9rem" height="7rem"/>
            <Card dstyle="Ricker" img={image1} width="9rem" height="7rem" />
        </div>
        <TopReels />
        </>
    )
}

export default Profile