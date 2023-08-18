import React, { useEffect, useState } from 'react'

const Tabs = () => {
    const [tab, settab] = useState(0);

    const [all_images, setall_images] = useState([]);
    const [all_videos, setall_videos] = useState([]);

    const tabNames = ['Instagram', 'Youtube', 'Photos'];
    const randomVideos = [
        "https://player.vimeo.com/external/538561465.sd.mp4?s=786eeae0e3c0f89892c3c0ef13d59127799f3182&profile_id=165&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/502448622.sd.mp4?s=b986796fe032a2ef7890880779489597a837b93b&profile_id=164&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/538562549.sd.mp4?s=f132e54f72491d919409cb025cf82cefaeee9190&profile_id=165&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/538569548.sd.mp4?s=b93b956e0678c7085afa73e3ad75480306b62986&profile_id=164&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/408338951.sd.mp4?s=3fb7a9cf64497e46c3e74bc876ed3a3425a88ad5&profile_id=165&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/394678709.hd.mp4?s=6fd073ac2c0e6fef3d6d2bc3bcbb200058ca8947&profile_id=174&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/396400728.sd.mp4?s=f26680fdcad05470d288ec146266a931dc15d5c9&profile_id=164&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/538561465.sd.mp4?s=786eeae0e3c0f89892c3c0ef13d59127799f3182&profile_id=165&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/502448622.sd.mp4?s=b986796fe032a2ef7890880779489597a837b93b&profile_id=164&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/538562549.sd.mp4?s=f132e54f72491d919409cb025cf82cefaeee9190&profile_id=165&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/538569548.sd.mp4?s=b93b956e0678c7085afa73e3ad75480306b62986&profile_id=164&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/408338951.sd.mp4?s=3fb7a9cf64497e46c3e74bc876ed3a3425a88ad5&profile_id=165&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/394678709.hd.mp4?s=6fd073ac2c0e6fef3d6d2bc3bcbb200058ca8947&profile_id=174&oauth2_token_id=57447761",
        "https://player.vimeo.com/external/396400728.sd.mp4?s=f26680fdcad05470d288ec146266a931dc15d5c9&profile_id=164&oauth2_token_id=57447761"
    ]

    const randomImages = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/1080/720",
        "https://picsum.photos/300/250",
        "https://picsum.photos/400/200",
        "https://picsum.photos/350/350",
        "https://picsum.photos/540/360",
        "https://picsum.photos/180/220",
        "https://picsum.photos/320/280",
        "https://picsum.photos/500/340",
        "https://picsum.photos/240/300",
        "https://picsum.photos/360/300",
        "https://picsum.photos/240/300",
        "https://picsum.photos/450/240",
        "https://picsum.photos/500/300",
    ]

    

    useEffect(() => {
        setall_images(Randomizer(randomImages));
        setall_videos(Randomizer(randomVideos));
        
    }, [])
    

    

    return (
        <>
        <div className="tabsContainer">
            <div className="tab">
            {tabNames.map((tabName, index) => (
            <h1 key={index} className={tab === index ? 'active' : ''}
                onClick={() => settab(index)} 
            >
                {tabName}
            </h1>
            ))}
            </div>
        </div>

        {
            tab===2 &&
            <div className="imageRow">

                {
                    all_images.map((images,indx)=>{
                        return (
                            <div key={indx} className="column">
                                {images.map((img, idx) => (
                                <img key={idx} src={img} alt="" />
                                ))}
                            </div>
                        );
                    })
                }
            </div>
        }

        {
            tab===0 && 
            <div className="imageRow">

                {
                    all_videos.map((videos,indx)=>{
                        return (
                            <div key={indx} className="column">
                                {
                                    videos.map((url,idx)=>{
                                        return(
                                            <video key={idx} autoPlay muted>
                                                <source src={url} type="video/mp4" />
                                            </video>
                                        )
                                    })
                                }
                            </div>
                        );
                    })

                }
            </div>
        }
        </>
    )
}


const Randomizer = (data)=> {
    const number_of_items = data.length;
    let number_of_columns = number_of_items
    if(number_of_items>5){
        number_of_columns = 5;
    }
    let steps = Math.ceil(number_of_items/number_of_columns)
    const shuffledImages = [...data];
    shuffledImages.sort(() => Math.random() - 0.5);

    const randomized_data = []
    let i=0,j=0;
    while(i<number_of_columns && j<number_of_items){
        const temp = shuffledImages.slice(j,j+steps)
        randomized_data.push(temp)
        i+=1;
        j+=steps
    }

    return randomized_data;
}

export default Tabs