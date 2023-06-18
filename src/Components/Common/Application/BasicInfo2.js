import React from 'react'
import {FormInputs} from './BasicInfo'
import './application.scss'

const BasicInfo2 = (props) => {
    const formFields = [
        { id: 'dob', type: 'date', name: 'Date of Birth' },
        { id: 'age', type: 'number', name: 'Your Age' },
        { id: 'dance_style', type: 'text', name: 'Preferred Dance Style' }
    ]
    return (
        <div className='applicationForm'>
            {
            formFields.map((field,i)=>{
            return <FormInputs key={i} id={field.id} type={field.type} name={field.name} />
            })
            }
        </div>
    )
}

export default BasicInfo2