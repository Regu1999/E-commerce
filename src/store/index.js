import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from './token.js'
import filterSlice from './shopFilterData.js'
const store = configureStore({
    reducer: {
        token: tokenSlice,
        filter: filterSlice,
    }
})

export default store