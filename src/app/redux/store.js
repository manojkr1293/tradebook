import { configureStore } from '@reduxjs/toolkit'
import journalSlice from './journalSlice'
import authSlice from './authSlice'

export const reduxStore = () =>{
  return configureStore({
    reducer : {
      journal: journalSlice.reducer,
      auth:authSlice.reducer,
    }
  })
}