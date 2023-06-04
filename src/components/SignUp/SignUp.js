import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css';
import {createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-hot-toast';
function SignUp() {
  const navigate = useNavigate();
  const [values , setValues] = useState({
    name:"",
    email:"",
    pass:"",
  });
  const [correct , setCorrect] = useState(false);
  const [submitDisabled , setSubmitDisabled] = useState(false);

  const handleSubmit =() =>{
    console.log(values);
    if(values.name === '' || values.email === '' || values.pass === ''){
      // window.alert('Please Enter Correct values');
      toast.error('Please enter correct values');
      return;
    }
    setSubmitDisabled(true);
    createUserWithEmailAndPassword(auth , values.email , values.pass).then(
      async(res)=>{
      console.log(res)
      setSubmitDisabled(false);
      // setCorrect(true);
      console.log(correct);
      const user = res.user;
      await updateProfile(user , {
        displayName:values.name,
      })  
      // window.alert("Sign In successful");
      toast.success("Sign Up successful");
      navigate('/');
      }
    ).catch((err)=>{
      setSubmitDisabled(false);
      console.log(err)
      // window.alert(err.message);
      toast.error(err.message);
      }
    );
  }

  return (
    <div className='sign-up-div'>
      <div className='form sign-up'>
        <form>
            <input 
              label = "name" 
              type='text' 
              placeholder='Enter your name'
              onChange={(event)=>
                setValues((prev) => ({...prev , name:event.target.value}))  
              }
            />
            <input 
              label = "email" 
              type='text' 
              placeholder='Enter your email'
              onChange={(event)=>
                setValues((prev) => ({...prev , email:event.target.value}))  
              }
            />
            <input 
              label = "password" 
              type='password' 
              placeholder='Enter your password'
              onChange={(event)=>
                setValues((prev) => ({...prev , pass:event.target.value}))  
              }
            />
            <span className='pass'>Password should be 6 characters long</span>
        </form>
        <Link to ={correct ? '/': '/SignUp'}><button disabled = {submitDisabled} onClick={handleSubmit} className = "submit" type = "submit">Create Account</button></Link>
      </div>
      <span className= 'acc'>Already have an account?&nbsp;<Link to = '/'>Log In</Link></span>
    </div>
  )
}

export default SignUp