import React from 'react'
import './Home.scss'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const TopReels = () => {
    const reel_urls = [
        "https://firebasestorage.googleapis.com/v0/b/kalanidhi-kala-studios.appspot.com/o/test5.mp4?alt=media&token=fa54a774-65ec-4c4d-9ab4-d76901f2e178",
        "https://firebasestorage.googleapis.com/v0/b/kalanidhi-kala-studios.appspot.com/o/Test123.mp4?alt=media&token=22d28c62-5f18-4cef-9456-bedf8f1be7d3",
        "https://firebasestorage.googleapis.com/v0/b/kalanidhi-kala-studios.appspot.com/o/Test3.mp4?alt=media&token=44cbb146-f479-4ffe-99f2-3acce0cd7bb6",
        "https://firebasestorage.googleapis.com/v0/b/kalanidhi-kala-studios.appspot.com/o/test13.mp4?alt=media&token=29f6376c-e296-4139-92a1-5826157b0503",
        "https://firebasestorage.googleapis.com/v0/b/kalanidhi-kala-studios.appspot.com/o/Newtest.mp4?alt=media&token=76d475ce-4530-48ee-af64-2aa15736765f"

    ]

    const openFullScreen = (event) => {
        const video = event.target;
    
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      };
    const handlePlay = (e)=>{
        const video = e.target;
        if (video.paused) {
            video.play();
          }
        else if (!video.paused) {
            video.pause();
          }
    }
    return (
    <div className="contentContainer">
        <h1 className="contentH1">Our Top Reels </h1>
        
        <div className="reelContainer">
            {
                reel_urls.map((url)=>{
                    return <LazyLoadComponent>
                        <video key={url} width="320" height="560" onClick={handlePlay} onDoubleClick={openFullScreen}>
                                <source src={url} type="video/mp4" />
                            </video>
                    </LazyLoadComponent>
                })
            }
        </div>
    </div>
    )
}

export default TopReels