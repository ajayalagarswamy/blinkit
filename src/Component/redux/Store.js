import { configureStore } from "@reduxjs/toolkit";
import addReducer from './addSlice'

const store = configureStore({
    reducer: {
        addtocart: addReducer
    }
})


export default store 