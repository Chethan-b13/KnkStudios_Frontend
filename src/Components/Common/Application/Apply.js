import React, { createContext, useState } from 'react'
import './application.scss'
import BasicInfo from './BasicInfo';
import Skills from './Skills';
import BasicInfo2 from './BasicInfo2';

export const ApplicationFormContext = createContext();

const Apply = (props) => {
  const [page, setpage] = useState(0);
  const [formData, setFormData] = useState({
    full_name: 'Chethan',
    email: '',
    phone: '',
    dob: '',
    age: '',
    address: '',
    dance_style: '',
    experience: '',
    schedule: '',
    emergency_contact: '',
  });

  console.log(formData);

  const RenderPage = ()=>{
    if(page===0){
      return <BasicInfo formData={formData} setFormData={setFormData}/>
    }else if(page===1){
      return <BasicInfo2 formData={formData} setFormData={setFormData}/>
    }
    else if(page===2){
      return <Skills formData={formData} setFormData={setFormData}/>
    }
  }

  return (
    
    <>
    <div className={`form ${props.ShowModal ? 'visible' : ''}`}>
        <div id="progress">
          <div style={{width : page===0 ? '33.33%': page===1?'66.66%' : '100%' }} id="progress_Bar">
        </div>
        
        </div>
        <div className="form_header">
          <h1>Join Dance Class</h1>
        </div>
        <div className="form_body">
        <ApplicationFormContext.Provider value={{formData,setFormData}}>
          {<RenderPage />}
        </ApplicationFormContext.Provider>
        </div>
        <div className="form_footer">
          <button disabled={page === 0 } onClick={()=>{setpage(page-1)}}>{'< Prev'}</button>
          <button onClick={()=>{if(page<2){setpage(page+1)}}}>{page===2 ?'Submit':'Next >'}</button>
        </div>
    </div>
    <div onClick={()=>{props.setShowModal(false)}} id="overlay"></div>
    </>
  )
}

export default Apply