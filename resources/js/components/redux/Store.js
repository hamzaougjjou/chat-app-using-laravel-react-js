import { configureStore } from "@reduxjs/toolkit";
import refreshLoginSlice from "./reducers/refreshLoginSlice";



let store = configureStore( {
    reducer:{
        Auth : refreshLoginSlice,
    }
} );

export default store;