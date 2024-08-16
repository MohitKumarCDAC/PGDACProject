import { createSlice } from "@reduxjs/toolkit";

// initialState: This object defines the initial state for the loginSlice.
//  It includes a userInfo property, which holds information about the logged-in user.

const initialState={
    userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem('userInfo')):null,

}

//creating a slice that manages the state related to user login.

const loginSlice=createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        
// This function updates the userInfo state with the data provided in action.payload.
// It also stores the updated userInfo in localStorage to maintain the user's session across page reloads.

        setCredentials:(state,action)=>
        {
            state.userInfo=action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload));
        },

        // This function sets userInfo to null, effectively logging the user out.
        // It also removes the userInfo from localStorage to clear the user's session.
        

        logout:(state)=>
        {
            state.userInfo=null;
            localStorage.removeItem('userInfo');
        }
    }
})

export const {setCredentials,logout}=loginSlice.actions
export default loginSlice.reducer
