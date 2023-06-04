import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-hot-toast';
function Home() {
    const navigate = useNavigate();
  const [values , setValues] = useState({
    email:"",
    pass:"",
  });
  const [correct , setCorrect] = useState(false);
  const [submitDisabled , setSubmitDisabled] = useState(false);

  const handleSubmit =() =>{
    console.log(values);
    if(values.email === '' || values.pass === ''){
      // window.alert('Please Enter Correct values');
      toast.success('Please Enter correct values');
      return;
    }
    setSubmitDisabled(true);
    signInWithEmailAndPassword(auth , values.email , values.pass).then(
      async(res)=>{
      console.log(res)
      setSubmitDisabled(false);
      // setCorrect(true);
      console.log(correct);
    //   const user = res.user;
    //   await updateProfile(user , {
    //     displayName:values.name,
    //   })  
        setCorrect(true);
        // window.alert("Loggein In Successfully");
        toast.success('Logged In successfully');
      navigate('/user');
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
    <div className='home'>
        <div className='logo'>
            <div className='name'></div>
            <span className='comments'>100% Uptime😎<span className='sub-part'>Zero Infrastructure Management</span></span>
            <div className='group'></div>
            <div className='link'>
                <a href = "www.aesthisia.com">aestihsia.com</a>
            </div>
            <div className='socials'>
                <a href = "/"><div className='linkedin'></div></a>
                <a href = "/"><div className='facebook'></div></a>
                <a href = "/"><div className='instagram'></div></a>
            </div>
        </div>


        <div className='right'>
            <div className='leaves'></div>
            <div className='text'>
                <span className='welcome'>Welcome <span className='back'>Back!</span></span>
                <span className='glad'>Glad to see you, Again!</span>
            </div>
            <div className='form'>
                <form>
                    <input label = "email" type='text' placeholder='Enter your email'
                        onChange={(event) =>setValues((prev) => ({...prev , email:event.target.value}))}
                    />
                    <input label = "password" type='password' placeholder='Enter your password'
                        onChange={(event) =>setValues((prev) => ({...prev , pass:event.target.value}))}

                    />
                </form>
                <button onClick={handleSubmit} className = "submit" type = "submit" disabled = {submitDisabled}>Log In</button>
            </div>
            <div className='sign-in'>
                <span className='account'>Don't have an account yet?</span>&nbsp;<Link to = '/SignUp'>Sign Up</Link>
            </div>
        </div>  
    </div>
  )
}

export default Home