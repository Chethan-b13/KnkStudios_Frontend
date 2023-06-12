import React from 'react'
import './Home.scss'
import InstagramEmbed from 'react-instagram-embed'

const YtReelsCards = () => {
    // const ytUrls = [
    //     'https://www.youtube.com/embed/CguV7CpdW0M',
    //     'https://www.youtube.com/embed/mSfaVyze3Bc',
    //     "https://www.youtube.com/embed/qOJ5qKTtP_s",
    //     "https://www.youtube.com/embed/9RLkKiWUZ4Q",
    //     'https://www.youtube.com/embed/CguV7CpdW0M'
    
    //   ]
  return (
    <div className="contentContainer">
        <h1 className="contentH1">Our Top Reels</h1>
        <div className='ytCardContainer'>
        <InstagramEmbed
            url='https://www.instagram.com/p/CpN4JyXBJKC/'
            clientAccessToken='587003886369628|IGQVJWUDFCV2JsUUtYeUJ5U2s1RFNTRmtiV1RWYVVfV1VNVXFrLUVBOGJmTHRKMkdUbEpnRGJxenI5Y2cxcXhEbDA1aGlSSG1BaGRpWHJ4aTFDSllfZAXh6cHZAfTnp0UDlvd1BTU3UzbGExYjBINWZAGZAwZDZD'
            maxWidth={320}
            hideCaption={false}
            containerTagName='ytCardContainer'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
          
        </div>
      </div>
    
  )
}

export default YtReelsCards