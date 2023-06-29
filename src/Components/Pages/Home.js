import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer'
import { HeaderSection } from '../Common/HeaderSection'
import Content from './Content'

import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../ReduxStores/AuthSlice'
import Loader from '../Common/Loader'

export const Home = () => {
  const [isloading, setisloading] = useState(false)
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)
  const fetchUser = async ()=>{
    setisloading(true)
    try {
      if(auth.isAuthenticated){
        await dispatch(getUserDetails(auth.token));
      }
    } catch (error) {
      throw error
    }finally{
      setisloading(false)
    }
  }

  useEffect(() => {
    
    fetchUser();

    return ()=> {}
  },[dispatch] )
  

  return (
    <div>
        <HeaderSection />
        <Content/>
        <Footer />
        {isloading && <Loader /> }
    </div>
  )
}
