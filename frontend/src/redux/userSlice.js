import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : JSON.parse(window?.localStorage.getItem('user')) ?? 'false'
}
const val = JSON.parse(window.localStorage.getItem('user'))
console.log(typeof(val)+'val')
const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
     login(state,action){
        state.user = action.payload;
    }
    }
})

export default userSlice.reducer;

export function userLogin(user){
    return (dispatch)=>{
     dispatch(userSlice.actions.login(user));
    }
}
