import React, { useState } from 'react'


    const Form=()=>{
        const [name,setname]=useState("");
        const [show,setshow]=useState(true);
        const changename=(event)=>{
            setname(event.target.value)
        }
const FormHandler=(event)=>{
event.preventDefault();
if(name.length===""){
 setshow(false)
    return;
}
console.log(name);
setshow(true)
}
    
  return (
   <form onSubmit={FormHandler}>
       <div className='form-control'>
         <input placeholder='Your Name' onChange={changename} />
       {!show &&  <p>please eneter your name</p> } 
       </div>
   
       <div className='form-control'>
         <input placeholder='Your Email' />
       </div>
       <div className='form-control'>
         <input placeholder='Phone Numbers' />
       </div>
      <select >
       <option>select Department</option>
       <option>One</option>
       <option>two</option>
       <option>tree</option>
      </select>
      <div className='form-control'>
        <textarea placeholder='Message'>
        </textarea>
       </div>
       <button>Submit</button>
   </form>
  )
    }

export default Form;
