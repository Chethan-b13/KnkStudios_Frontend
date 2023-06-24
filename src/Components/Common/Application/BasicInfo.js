import React, { useContext } from 'react'
import './application.scss'

import FormInputs from './FormInputs'
import { ApplicationFormContext } from './Apply'

const BasicInfo = () => {
  const {formData,setFormData} = useContext(ApplicationFormContext);
  const handleformData = (fieldName, value)=>{
    setFormData({...formData,[fieldName]:value});
  }
  const formFields = [
    { id: 'full_name', type: 'text', name: 'Full Name' },
    { id: 'email', type: 'text', name: 'Email Address' },
    { id: 'phone', type: 'tel', name: 'Phone Number' }
  ]
  return (
    <div className='applicationForm' key={1}>
      {
        formFields.map((field,i)=>{
          return <FormInputs key={`ren${i+1}`} id={field.id} type={field.type} name={field.name} />
        })
      }
      <div className="applicationForm__field" key={'address'}>
        <label htmlFor="address">Address</label>
        <textarea onBlur={(e)=>handleformData('address',e.target.value)} defaultValue={formData['address']} name='address' key={'address'} id="address"></textarea>
      </div>
      
        
    </div>
  )
}



export default BasicInfo