import { configureStore } from "@reduxjs/toolkit";
import refreshLoginSlice from "./reducers/refreshLoginSlice";



let store = configureStore( {
    reducer:{
        refreshLogin : refreshLoginSlice,
    }
} );

export default store;