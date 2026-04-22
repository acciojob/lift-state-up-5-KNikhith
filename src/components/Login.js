import React, { useState } from "react";

export default function Login({isLoggedIn,onLogin}){
    let [userName,setUserName]=useState("");
    let [password,setPassword]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        onLogin();
    }
    if(isLoggedIn){
        return <div>You are logged in!</div>
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                type="text"
                id="username"
                name="username"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />
                <br/>
                <label htmlFor="password">Password: </label>
                <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}