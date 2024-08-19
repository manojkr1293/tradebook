'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../thunks/authThunks";
import Spinner from "./Spinner";

const Register = () =>{
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [cpassword,setCPassword] = useState('');
  const [errormsg, setError] = useState(false);
  const [passworderror, setPassworderror]  = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const {status,error} = useSelector((state)=>state.auth);
  console.log(status);

  const handleSignUp = async (e) =>{
    e.preventDefault();
    if(password !== cpassword){
      setPassworderror(true);
      return false;
    }else{
      setPassworderror(false);
    }

    if(!email || !password || !cpassword){
      setError(true);
      return false;
    }else{
      setError(false);
    }

    
    dispatch(registerUser({email,password}));
    
    if(status === 'succeeded'){
      router.push('/auth');
    }
  }

  return(
   <>
  
    <div className="block">
    <div className="mt-10">
    <img
        alt="Your Company"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        className="mx-auto h-10 w-auto"
      />
      <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
        Registration
      </h2>
      </div>
      
      <div className="mt-10">
        <label className="text-sm font-semibold text-gray-900">Email address</label>
        <input type="email" className="mt-2 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 font-semibold ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={email} onChange={(e)=>(setEmail(e.target.value))}/>
        {
          errormsg && !email && <span className="text-sm text-red-500 font-normal">Please Enter Valid Email</span>
        }
      </div>

      <div className="mt-10">
        <label className="text-sm font-semibold text-gray-900">Password</label>
        <input type="password" className="mt-2 w-full py-1.5 px-2 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6" value={password} 
        onChange={(e)=>(setPassword(e.target.value))}/>
        {
          errormsg && !password && <span className="text-sm text-red-500 font-normal">Please Enter Valid Password</span>
        }
        {
           passworderror && <span className="text-sm font-normal text-red-500">password and confirm password is not matched</span>
        }
      </div>

      <div className="mt-10">
        <label className="text-sm font-semibold text-gray-900">Confirm Password</label>
        <input type="password" className="mt-2 w-full py-1.5 px-2 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6" value={cpassword} 
        onChange={(e)=>(setCPassword(e.target.value))}/>
        {
          errormsg && !cpassword && <span className="text-sm text-red-500 font-normal">Please Enter Valid Confirm Password</span>
        }
        {
          passworderror && <span className="text-sm font-normal text-red-500">password and confirm password is not matched</span>
        }
      </div>

      <div className="mt-10 flex">
        <button className="w-full font-semibold bg-indigo-600 text-white text-center px-4 py-2 rounded-md leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSignUp}>Sign Up</button>
      </div>
      {error && <p>{error}</p>}
   </div>
    
    </>
  )
}

export default Register;