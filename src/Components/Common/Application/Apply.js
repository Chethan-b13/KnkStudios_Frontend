import React, { useState } from 'react'
import './application.scss'
import BasicInfo from './BasicInfo';
import Skills from './Skills';

const Apply = (props) => {
  const [page, setpage] = useState(0);

  const RenderPage = ()=>{
    if(page===0){
      return <BasicInfo />
    }else if(page===1){
      return <Skills />
    }
  }

  return (
    <>
    <div className={`form ${props.ShowModal ? 'visible' : ''}`}>
        <div id="progress">
          <div style={{width : page==0 ? '50%' : '100%' }} id="progress_Bar">
        </div>
        
        </div>
        <div className="form_header">
          <h1>Application Form</h1>
        </div>
        <div className="form_body">
          {<RenderPage />}
        </div>
        <div className="form_footer">
          <button disabled={page == 0 } onClick={()=>{setpage(page-1)}}>Prev</button>
          <button onClick={()=>{setpage(page+1)}}>{page==1 ?'Submit':'Next'}</button>
        </div>
    </div>
    <div onClick={()=>{props.setShowModal(false)}} id="overlay"></div>
    </>
  )
}

export default Apply