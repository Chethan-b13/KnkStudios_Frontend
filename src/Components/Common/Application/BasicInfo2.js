import React from 'react'
import './application.scss'
import FormInputs from './FormInputs'

const BasicInfo2 = () => {
    const formFields = [
        { id: 'dob', type: 'date', name: 'Date of Birth' },
        { id: 'age', type: 'number', name: 'Your Age' },
        { id: 'dance_style', type: 'text', name: 'Preferred Dance Style' }
    ]
    return (
        <div className='applicationForm'>
            {
            formFields.map((field,i)=>{
            return <FormInputs key={`ren${i+1}`} id={field.id} type={field.type} name={field.name} />
            })
            }
        </div>
    )
}

export default BasicInfo2