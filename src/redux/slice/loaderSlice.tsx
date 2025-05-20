import { createSlice } from "@reduxjs/toolkit";
interface InitialStateModel {
    isLoading: boolean
}
const initialState: InitialStateModel = {
    isLoading: false
}

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setLoading } = loaderSlice.actions
export default loaderSlice.reducer