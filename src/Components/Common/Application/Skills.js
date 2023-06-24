import React, { useContext } from 'react'
import './application.scss'
import FormInputs from './FormInputs';
import { ApplicationFormContext } from './Apply';

const Skills = () => {
  const {formData,setFormData} = useContext(ApplicationFormContext);
  const handleformData = (fieldName, value)=>{
    setFormData({...formData,[fieldName]:value});
  }
  const formFields = [
    { id: 'schedule', type: 'text', name: 'Preferred Class Schedule' },
    { id: 'emergency_contact', type: 'text', name: 'Emergency Contact' }
  ];
  return (
    <div className='applicationForm'>
        <div className="applicationForm__field" key='experience'>
          <label htmlFor="experience">Experience Level:</label>
          <select defaultValue={formData['experience']} key='experienceOptions' onBlur={(e)=>handleformData('experience',e.target.value)} id="experience" name="experience" required>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        {
          formFields.map((field,i)=>{
            return <FormInputs key={`ren${i+1}`} id={field.id} type={field.text} name={field.name} />
          })
        }
    </div>
  )
}

export default Skills