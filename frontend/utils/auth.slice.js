import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") ?
          JSON.parse(localStorage.getItem("user")) : null
}

const authSlice = createSlice({ 
    name : "auth" , 
    initialState, 
    
    reducers: {
        setuser: (state, action) => {
            state.user = action.payload, 
                localStorage.setItem("user" , action.payload)
        }

        , logout: (state) => {
            state.user = null
            localStorage.removeItem("user")
        }
    }
})

export const {setuser , logout} = authSlice.actions  
export default authSlice.reducer





