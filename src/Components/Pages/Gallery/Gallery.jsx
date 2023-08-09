import React from 'react'
import { Navbar } from '../../Common/Navbar'
import Tabs from './Tabs'
import './gallery.scss'

const Gallery = () => {
  return (
    <>
    <Navbar background={true}/>
    <div className="galleryContainer">
        <Tabs />
    </div>
    </>
  )
}

export default Gallery