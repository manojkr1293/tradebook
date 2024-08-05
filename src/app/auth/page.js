'use client'
import { useState } from "react";
import Login from "../_component/login";
import Register from "../_component/register";

const Auth =()=>{
  const [login,setLogin] = useState(true);
  return(
    <>
    <div className="flex justify-center items-center min-h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {login ? <Login setLogin = {setLogin}/> : <Register setLogin = {setLogin}/>}
      </div>
     
    </div>
    </>
  )
}
export default Auth;