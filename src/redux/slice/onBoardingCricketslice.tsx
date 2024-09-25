import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   currentStep : 1 ,
   formData : {}
}


const onBoardingCricketSlice = createSlice({
    name : "onboarding",
    initialState , 
    reducers : {
        setCurrentStep : (state, action) => {
            state.currentStep = action.payload
        },
        updateFormData : (state, action) => {
            state.formData = {
                ...state.formData ,
                ...action.payload 
            }
        }
    }
})

export const { setCurrentStep , updateFormData} = onBoardingCricketSlice.actions;
export default onBoardingCricketSlice.reducer;