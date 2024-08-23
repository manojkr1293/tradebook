import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchJournal = createAsyncThunk('fetchJournal', async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let authuserId = JSON.parse(localStorage.getItem('authUser'))._id;
  
  const response = await fetch(`${apiUrl}api/journal/${authuserId}`)
  return response.json();
})

export const fetchSingleJournal = createAsyncThunk('fetchSingleJournal', async (journalId) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const response = await fetch(`${apiUrl}api/journal/view/${journalId}`)
  return response.json();
})

export const addNewJournal = createAsyncThunk('addNewJournal', async(initialPost)=>{
  console.log('initialPost',initialPost);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let response = await fetch(`${apiUrl}api/journal`,{
    method:"post",
    body:JSON.stringify({stock_name:initialPost.filterOption,time_frame:initialPost.timeframe,trades_tatus:initialPost.tradestatus,buying_date:initialPost.buyDate,selling_date:initialPost.sellDate,buying_price:initialPost.buyPrice,selling_price:initialPost.sellPrice,stop_loss:initialPost.stoploss,quantity:initialPost.quantity,reference_link:initialPost.referencelink,strategy:initialPost.strategy,reason:initialPost.reason,notes:initialPost.notes,create_date:initialPost.createDate,user_id:initialPost.userid})
  })

  response = await response.json();
  if(response.success){
    console.log('journalres',response);
  }
})

const initialState = {
  journals: [],
  journalsApiData:[],
  journalItems: [],
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
      
    .addCase(fetchSingleJournal.fulfilled, (state, action) => {
       
      state.status = 'succeeded'
      state.journalItems = action.payload
    })
      .addCase(fetchJournal.fulfilled, (state, action) => {
       
        state.status = 'succeeded'
        state.journalsApiData = action.payload
      })
      .addCase(addNewJournal.fulfilled, (state, action) => {
        
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