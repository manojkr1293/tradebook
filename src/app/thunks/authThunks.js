import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk('auth/loginUser',
  async(credentials, {rejectWithValue}) =>{
    try{
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}api/auth`,{
        method:'POST',
        body:JSON.stringify(credentials)
      });
      return response.json();
    }catch(err){
      return rejectWithValue(err.response.data);
    }
  }
)

export const registerUser = createAsyncThunk('auth/registerUser', 
  async(userData,{rejectWithValue})=>{
    try{
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
       const response = await fetch(`${apiUrl}api/auth`,{
          method:'POST',
          body:JSON.stringify(userData)
        });
        return response.data;
    }catch(error){
      return rejectWithValue(error.response.data);
      
    }
  }
);