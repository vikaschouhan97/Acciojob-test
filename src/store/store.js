import { configureStore, createSlice } from "@reduxjs/toolkit";


const addItem = createSlice({
    name:'cartValue',
    initialState: {quantity: 0},
    reducers: {
        addItemToCart(state) {
            state.quantity++;
        }
    }
})

const store = configureStore({
    reducer: addItem.reducer
})

export const addItemActions = addItem.actions

export default store;