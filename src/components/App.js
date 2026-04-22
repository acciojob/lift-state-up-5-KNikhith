
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Login from "./Login";

const App = () => {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  function handleLogin(){
    setIsLoggedIn(true);
  }
  return (
    <div>
        <Login isLoggedIn={isLoggedIn} onLogin={handleLogin}/>
    </div>
  )
}

export default App
