import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    initialState: { price: [], size: [], search: null },
    name: 'filterData',
    reducers: {
        addData: (state, action) => {
            // console.log('Reducer',action.payload);
            state[action.payload.type] = [...action.payload.value]
        },
        remove: (state, action) => {
            console.log(action);
            const index = state[action.payload.type].indexOf(action.payload.data);

            // console.log(state);

            state[action.payload.type].splice(index, 1)


        }
    }
})

export const { addData, remove } = filterSlice.actions;
export default filterSlice.reducer