const { createSlice } = require("@reduxjs/toolkit")
const { registerUser, loginUser } = require("../thunks/authThunks")

const initialState = {
  authUser: [],
  authUserData : [],
  status: 'idle',
  error: null,
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    logout: (state) =>{
      state.authUser=null,
      state.status='idle',
      state.error=null
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(registerUser.pending,(state)=>{
      state.status='loading',
      state.error=null
    })
    .addCase(registerUser.fulfilled,(state,action)=>{
      state.status='succeeded',
      state.authUser=action.payload
    })
    .addCase(registerUser.rejected,(state,action)=>{
      state.status='rejected',
      state.error=action.payload
    })
    .addCase(loginUser.pending,(state)=>{
      state.status ='loading',
      state.error=null
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
      state.status='succeeded',
      state.authUserData = action.payload
    })
    .addCase(loginUser.rejected,(state,action)=>{
      state.status='rejected',
      state.error=null
    })
  }
});

export const {logout} = authSlice.actions;
export default authSlice;