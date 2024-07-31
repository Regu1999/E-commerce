import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from './token.js'
const store = configureStore({
    reducer: {
        token: tokenSlice
    }
})

export default store