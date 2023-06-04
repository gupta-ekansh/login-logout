import React, { useEffect, useState } from "react";
import {BrowserRouter as Router , Routes , Route, useSearchParams} from 'react-router-dom';
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import {Toaster} from 'react-hot-toast';
function App() {
  const [userName , setUserName] = useState('');
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      console.log(user);
      setUserName(user.displayName);
    })
  },[])
  return (
    <div className="App">
      <Toaster/>
      <Router>
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route path = '/user' element = {<Login name = {userName}/>}/>
          <Route path = '/Signup' element = {<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
