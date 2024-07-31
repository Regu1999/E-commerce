import { createSlice } from "@reduxjs/toolkit";
const tokenSlice = createSlice({
    name: 'token',
    initialState: null,
    reducers: {
        addToken: (state, action) => {
            state = action.payload;
        },
        emptyToken: (state) => {
            state = null;
        }
    }
})
const { addToken, emptyToken } = tokenSlice.actions
export default tokenSlice.reducer