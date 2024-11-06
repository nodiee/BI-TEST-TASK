import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Validation from './SignupValidation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
let test = '';
function Signup() {
    const [Values, SetValues]= useState({
        name:'',
        phoneNumber:'',
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors] = useState({})
    const handleInput= (event ) =>{
        SetValues(prev => ({...prev,[event.target.name]:[event.target.Value]}))
    }
    const handleSubmit=(event) => {
        event.preventDefault();
        setErrors(Validation(Values));
        if(errors.name ==="" && errors.phoneNumber ==="" && errors.email ==="" && errors.password ==="" ){
            axios.post('http://localhost:8081/signup', Values)
            .then(res => {
              navigate('/');
            })
            .catch(err => console.log(err));
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100' > 
        <div className='bg-white p-3 rounded w-25'>
            <form action="" onSubmit={handleSubmit}>
                <h1> Sign up </h1>
            <div className='mb-3'>
                    <label htmlFor ="Name"> Name</label>
                    <input type="Name" placeholder='Name' name ='name' onChange={handleInput} className='form-control rounded-0'/> 
                    {errors.Name&& <span className='text-danger'> {errors.Name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor ="Phone number"> Phone number</label>
                    <input type="Phone number" placeholder='Phone number' name ='phoneNumber' onChange={handleInput}className='form-control rounded-0'/> 

                </div>
                <div className='mb-3'>
                    <label htmlFor = "email"> Email</label>
                    <input type="email" placeholder='enter Email' name ='email' onChange={handleInput} className='form-control rounded 0'/> 
                    {errors.email&& <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor ="password"> Password</label>
                    <input type="password" placeholder='enter Password' name ='password'onChange={handleInput} className='form-control rounded-0'/> 
                    {errors.password&& <span className='text-danger'> {errors.password}</span>}
                </div> 
                <button type='submit' className= 'btn btn-success w-100'> sign up </button>
                <p> Already have an account?</p>
               <Link to="/"  className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Login </Link>
                
            </form>
        </div>



    </div>
  )
}

export default Signup