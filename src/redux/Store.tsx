import { configureStore } from "@reduxjs/toolkit";
import onBoardingCricketSlice from './slice/onBoardingCricketslice'
export const store = configureStore({
    reducer:{
        onboarding : onBoardingCricketSlice
    }
})



// write this below line if using typescript 

// to get the type of store 

// Get the type of our store variable 
export type AppStore = typeof store 

// Infer the `RootState ` & `AppDispatch` types from the store itself 

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch'];