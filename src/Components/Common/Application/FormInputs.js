import React , { useContext } from 'react'
import { ApplicationFormContext } from './Apply'

const FormInputs = (props) => {
    const {formData,setFormData} = useContext(ApplicationFormContext);
    const handleformData = (fieldName, value)=>{
      setFormData({...formData,[fieldName]:value});
    }
    return(
      <div className="applicationForm__field">
        <label htmlFor={props.id}>{props.name}</label>
        <input key={Math.random()*36.4621596072} onBlur={(e)=>handleformData(props.id,e.target.value)} type={props.type} id={props.id} defaultValue={formData[props.id]} />
      </div>
    );
}

export default FormInputs

