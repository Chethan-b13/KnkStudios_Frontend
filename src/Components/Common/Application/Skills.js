import React from 'react'
import {FormInputs} from './BasicInfo'
import './application.scss'

const Skills = (props) => {
  const formFields = [
    { id: 'schedule', type: 'text', name: 'Preferred Class Schedule' },
    { id: 'emergency_contact', type: 'text', name: 'Emergency Contact' }
  ];
  return (
    <div className='applicationForm'>
        <div className="applicationForm__field" key='experience'>
          <label for="experience">Experience Level:</label>
          <select key={'experience'} id="experience" name="experience" required>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        {
          formFields.map((field,i)=>{
            return <FormInputs key={i} id={field.id} type={field.text} name={field.name} />
          })
        }
    </div>
  )
}

export default Skills