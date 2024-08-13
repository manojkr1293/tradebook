import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchJournal = createAsyncThunk('fetchJournal', async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const authuser = JSON.stringify(localStorage.getItem('authuser'));
  console.log(authuser);
  const response = await fetch(`${apiUrl}api/journal`)
  return response.json();
})

export const addNewJournal = createAsyncThunk('addNewJournal', async(initialPost)=>{
  console.log(initialPost);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let response = await fetch(`${apiUrl}api/journal`,{
    method:"post",
    body:JSON.stringify({stock_name:initialPost.filterOption,time_frame:initialPost.timeframe,trades_tatus:initialPost.tradestatus,buying_date:initialPost.buyDate,selling_date:initialPost.sellDate,buying_price:initialPost.buyPrice,selling_price:initialPost.sellPrice,stop_loss:initialPost.stoploss,quantity:initialPost.quantity,strategy:initialPost.strategy,reason:initialPost.reason,notes:initialPost.notes,create_date:initialPost.createDate,user_id:initialPost.userid})
  })

  response = await response.json();
  if(response.success){
    console.log('journalres',response);
  }
})

const initialState = {
  journals: [],
  journalsApiData:[],
  status: 'idle',
  error: null,
}
const journalSlice = createSlice({
  name:'journal',
  initialState,
  reducers:{
    journalItmes:(state,action)=>{
      return action.payload
    },
    addToJournal: (state,action) =>{
      //state.journals.push(...action.payload)
      console.log("journal",action.payload);
      state.journals.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      
      .addCase(fetchJournal.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchJournal.fulfilled, (state, action) => {
       
        state.status = 'succeeded'
        state.journalsApiData = action.payload
      })
      .addCase(addNewJournal.fulfilled, (state, action) => {
        console.log('reducer')
        state.status = 'succeeded'
        state.journals.push(action.payload)
      })
      .addCase(fetchJournal.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown Error'
      })
  }
});

export const journalAction = journalSlice.actions;
export default journalSlice;