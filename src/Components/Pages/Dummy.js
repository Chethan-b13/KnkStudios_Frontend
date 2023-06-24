import React, { useState } from 'react'

const Dummy = () => {
    const [muted, setmuted] = useState(true);

    const src = "https://firebasestorage.googleapis.com/v0/b/kalanidhi-kala-studios.appspot.com/o/321889115_1024475058443189_3337895393334059745_n.mp4?alt=media&token=648f4bd5-df80-4c91-8196-0808cb72cbe3"
    return (
        <div className="reelsContainer">
            <video onClick={()=>setmuted(!muted)} width="320" height="560" autoPlay muted>
                <source src={src} type="video/mp4" />
            </video>
        </div>
    )
}

export default Dummy