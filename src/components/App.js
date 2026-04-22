
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import SignUp from "./SignUp";

const App = () => {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  function handleLoggedIn(){
    setIsLoggedIn(true);
  }
  return (
    <div>
        <SignUp isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn}/>
    </div>
  )
}

export default App
