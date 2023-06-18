import React, { useContext } from 'react'
import './application.scss'
import { ApplicationFormContext } from './Apply'

const BasicInfo = (props) => {
  const formFields = [
    { id: 'full_name', type: 'text', name: 'Full Name' },
    { id: 'email', type: 'text', name: 'Email Address' },
    { id: 'phone', type: 'tel', name: 'Phone Number' }
  ]
  return (
    <div className='applicationForm' key={1}>
      {
        formFields.map((field,i)=>{
          return <FormInputs key={i} id={field.id} type={field.type} name={field.name} />
        })
      }
      <div className="applicationForm__field" key={'address'}>
        <label htmlFor="address">Address</label>
        <textarea key={'address'} id="address"></textarea>
      </div>
      
        
    </div>
  )
}

export const FormInputs = (props)=>{
  const {formData,setFormData} = useContext(ApplicationFormContext);
  const handleformData = (fieldName, value)=>{
    setFormData({...formData,[fieldName]:value});
  }
  return(
    <div className="applicationForm__field" key={props.id}>
      <label htmlFor={props.id}>{props.name}</label>
      <input name={props.id} onChange={(e)=>handleformData(props.id,e.target.value)} type={props.type} id={props.id} value={formData[props.id]} />
    </div>
  );
}

export default BasicInfo