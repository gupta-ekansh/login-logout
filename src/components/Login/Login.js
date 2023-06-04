import React from 'react'
import Home from '../Home/Home'
import './Login.css';
function Login(props) {
  console.log(props.name);
  return (
    <div className='logged-in'>Logged In</div>
  )
}


export default Login