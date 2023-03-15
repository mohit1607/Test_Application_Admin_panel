import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: 'no name',
        token: 'no token'
    },
    reducers:{
        setUserAndToken: (state, action) => {
            state.name = action.payload.name
            state.token = action.payload.token
            console.log(state.name, state.token)
        }
    }
})

export const {setUserAndToken} = authSlice.actions
export default authSlice.reducer