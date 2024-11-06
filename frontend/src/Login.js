import React, { useState } from 'react'
import button from './../node_modules/bootstrap/js/src/button';
import { Link } from 'react-router-dom';
import './LoginValidation'
import Validation from './LoginValidation';


function Login() {
    const [Values, SetValues]= useState({
        email:'',
        password:''
    })
    const [errors,setErrors] = useState({})
    const handleInput= (event ) =>{
        SetValues(prev => ({...prev,[event.target.name]:[event.target.Value]}))
    }
    const handleSubmit=(event) => {
        event.preventDefault();
        setErrors(Validation(Values));
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100' > 
        <div className='bg-white p-3 rounded w-25'>
            <form action="" onSubmit={handleSubmit}>
            <h1> Sign in </h1>
                <div className='mb-3'>
                    <label htmlFor = "email"> Email</label>
                    <input type="email" placeholder='enter Email' name="email" onChange={handleInput} className='form-control rounded 0'/> 
                    {errors.email&& <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor ="password"> Password</label>
                    <input type="password" placeholder='enter Password'name = "password"className='form-control rounded-0'/> 
{errors.password&& <span className='text-danger'> {errors.password}</span>}
                </div> 
                <button type='submit' className='btn btn-success w-100'> login </button>
                <p> if you have'nt registered yet.</p>
               <Link to="/signup"  className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Register </Link>
                
            </form>
        </div>



    </div>
  )
}

export default Login;