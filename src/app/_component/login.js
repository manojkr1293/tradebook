'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = (props) =>{
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async() =>{
    let response = await fetch(`${NEXT_PUBLIC_API_URL}api/auth`,{
      method:'POST',
      body:JSON.stringify({username,password,isLogin:true})
    })

    response = await response.json();

    if(response.success){
     let {result} = response;
     if(result){
      delete result.password;
      localStorage.setItem('authUser',JSON.stringify(result))
      router.push('dashboard');
     }
    }else{
      alert('login failed');
    }
  }
  
  return(
    <>
    <div className="block">
      <div className="mb-10">
        <img className="w-auto h-10 mx-auto mb-10"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
        <h2 className="text-center font-semibold text-2xl text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mb-10">
        <label className="text-sm font-semibold text-gray-900">Username</label>
        <input value = {username} onChange={(e)=>setUsername(e.target.value)} type="text" className="mt-1 w-full text-sm text-gray-900 rounded-md border px-3 py-2 shadow-sm"/>
      </div>
      <div className="mb-10">
        <label className="text-sm font-semibold text-gray-900">Password</label>
        <input value ={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="text-sm w-full text-gray-900 border px-3 py-2 shadow-sm rounded-md"/>
      </div>
      <div className="text-center">
      <button onClick={handleLogin} className=" bg-purple-700 rounded-md text-white text-1xl px-5 py-2 w-full">Sign In</button>
      </div>
      <p onClick = {(e)=>props.setLogin(false)}className="text-center text-purple-800 font-medium text-1xl mt-5">Register Here</p>
    </div>
    </>
  )
}
export default Login;