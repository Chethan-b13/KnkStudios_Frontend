import React from 'react'
import { Navbar } from '../../Common/Navbar'
import Tabs from './Tabs'
import Footer from '../../Common/Footer'
import './gallery.scss'

const Gallery = () => {
  return (
    <>
    <Navbar background={true}/>
    <div className="galleryContainer">
        <Tabs />
        <Footer />
    </div>
    </>
  )
}

export default Gallery