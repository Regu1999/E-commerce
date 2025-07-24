import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from './token.js'
import filterSlice from './shopFilterData.js'
import notificationSlice from './notification.js'
const store = configureStore({
    reducer: {
        token: tokenSlice,
        filter: filterSlice,
        notification: notificationSlice
    }
})

export default store