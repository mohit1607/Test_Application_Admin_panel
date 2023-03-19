import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: 'no name',
        token: 'no token',
        university: 'no university'
    },
    reducers:{
        setUserAndToken: (state, action) => {
            state.name = action.payload.name
            state.token = action.payload.token
            state.university = action.payload.university
            console.log(state.name, state.token, state.university)
        }
    }
})

export const {setUserAndToken} = authSlice.actions
export default authSlice.reducer