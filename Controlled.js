import React, { useEffect, useState } from 'react'
import { validateEmail,validateName,validateQuest } from "./validation";




export const Controlled = () => {
    const [value,setValue]=useState({})
    const [errors, setErrors] = useState({});
    
   
    const [submitData, setSubmitData] = useState(false)


  
    
    //setFromData(obj)

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitData) {
          //callback();
        }
      }, [errors]);
      
      const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (value.firstName || value.LastName) setErrors(validateName(value))
        if (value.email) setErrors(validateEmail(value))
        if(value.question) setErrors(validateQuest(value))
        setSubmitData(true)
        
      };
    const handleChange = (event) => {
        event.persist();
        setValue(values => ({ ...values, [event.target.name]: event.target.value }));
      };
    
    
    // const handleFirstName = (ele)=>{
    //     setName(ele.target.value)
    // }
    // const handleLastName = (ele)=>{
    //     setname(ele.target.value)
    // }
    // const handleEmail = (ele)=>{
    //     setEmailId(ele.target.value)
    // }
    // const handlequestion = (ele)=>{
    //     setQuestion(ele.target.value)
    // }
    // const handlebio = (ele)=>{
    //     setBio(ele.target.value)
    // }



    return (
        <div className='container mt-4'>
            <div className='row'>
                <figure className='text-center'>
                    <blockquote className='blockquote'>
                        <p>Controlled components</p>
                    </blockquote>
                </figure>
                <form>
    
                    <div class="mb-3">
                        <label class="form-label">First Name</label>
                        <input type="text" class='from-control' name='firstName' placeholder='First Name' onChange={handleChange} value={value.firstName} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" class='from-control' name='lastName' placeholder='Last Name' onChange={handleChange} value={value.LastName} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email Id:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name='email' placeholder="name@example.com" onChange={handleChange} value={value.email} />
                    </div>
                    <div class="mb-3">
                        <label>Security question: </label>
                        <select className='from-control'>
                            <option disabled value="">{" "}Select an option</option>
                            <option>What is your mother's maiden name?</option>
                            <option>What was the name of your first pet?</option>
                            <option>What was the name of your first school?</option>
                        </select>
                        <input type="text" className='from-control' placeholder='Security Answer' name='question' onChange={handleChange} value={value.question}  />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
                        <textarea class="form-control" name='bio' id="exampleFormControlTextarea1" rows="3"onChange={handleChange} value={value.bio} ></textarea>
                    </div>

                    <button>
                        Cancel
                    </button>
                    <button type='button' onClick={handleSubmit}>Submit</button>
                </form>

            </div>


        </div>
    )
}
