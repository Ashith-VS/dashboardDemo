import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./slice/loaderSlice"
const store=configureStore({
    reducer:{
        loader:loaderSlice
    }
})
export default store


export type RootState = ReturnType<typeof store.getState>;

