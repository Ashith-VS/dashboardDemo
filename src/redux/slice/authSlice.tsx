import { createSlice } from "@reduxjs/toolkit";
interface AuthState {
    username: string | null;
    isDarkMode: boolean;
}

const initialState: AuthState = {
    username: null,
    isDarkMode: localStorage.getItem('darkMode') === 'true'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login:(state,action)=>{
            state.username=action.payload
        },
        logout:(state)=>{
            state.username=null
        },
        toggleDarkMode:(state)=>{
            state.isDarkMode=!state.isDarkMode
            localStorage.setItem('darkMode',String(state.isDarkMode))
        }
    }
})

export const {login,logout,toggleDarkMode}=authSlice.actions
export default authSlice.reducer