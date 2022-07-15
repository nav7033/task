import React ,{useState}from 'react'
import './login.css'

export const Login = () => {
    const [value,setValue]=useState({
        email:"",
        password:""


    })
    const[err,setErr]=useState({
        email:"",
        password:""

    })
    function data (){
        if(!(value.email==="" && value.password==="")){
            console.log("Data :",value)
        }
    }
    const onChange = (ele)=>{
        const {name,value}= ele.target
        setValue((ele)=>({...ele,[name]:value}))
    }

    const onSubmit= function(ele){
        ele.preventDefault();
        if(!(/\s+@s+\.\s+/).test(value.email)){
            setErr((ele)=>({
                ...ele,email:"Invalid Email*"
            }))
        }
        if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(value.password)){
            setErr((ele)=>({
                ...ele,password:"password length should be min 8 and [Aa@1]*"
            }))
        }
        data();

    }
    return (
        <div>
            <section class="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="img-fluid" alt="Sample image" />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={onSubmit}>


                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0">Login</p>
                                </div>

                                {/*Email input*/}
                                <div class="form-outline mb-4">
                                    <input name='email' type="email" id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Enter a valid email address" onChange={onChange} value={value.email}/>
                                    <label class="form-label" for="form3Example3">Email address</label>
                                    {!!err.email && (<div>
                                        <p class="danger">{err.email}</p>
                                    </div>)}
                                </div>

                                {/*Password input*/}
                                <div class="form-outline mb-3">
                                    <input name='password' type="password" id="form3Example4" class="form-control form-control-lg"
                                        placeholder="Enter password" onChange={onChange} value={value.password}/>
                                    <label class="form-label" for="form3Example4">Password</label>
                                    {!!err.password && (<div>
                                        <p class="danger">{err.password}</p>
                                    </div>)}
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    {/*check box*/}
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label class="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" class="text-body">Forgot password?</a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" class="btn btn-primary btn-lg button"
                                    onClick={onSubmit}>Login</button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        class="link-danger">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
               
            </section>
        </div>
    )
}
