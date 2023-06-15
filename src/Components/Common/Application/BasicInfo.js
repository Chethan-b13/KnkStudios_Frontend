import React from 'react'

const BasicInfo = () => {
  const inputFields = [
    {type:'text',name:'Full Name',id:'name'},
    {type:'email',name:'Email ID',id:'name'},
    {type:'tel',name:'Full Name',id:'name'},
    {type:'number',name:'Full Name',id:'name'},
  ]
  return (
    <div className='applicationForm'>
        <Inputs id />
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='email@gmail.com' />
        <input type="tel" placeholder='+91 980****909' />
        <input type="number" placeholder='Your Age' />
        <input type="date" id="dob" name="dob"  />
        <textarea id="address" name="address"  />
    </div>
  )
}

const Inputs = (props)=>{
  return(
    <>
    <label htmlFor={props.id}>{props.name}</label>
    <input type={props.type} id={props.id} />
    </>
  );
}

export default BasicInfo