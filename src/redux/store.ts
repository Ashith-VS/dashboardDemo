import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./slice/loaderSlice"
import authSlice from "./slice/authSlice"

const store=configureStore({
    reducer:{
        auth:authSlice,
        loader:loaderSlice
    }
})
export default store


export type RootState = ReturnType<typeof store.getState>;

