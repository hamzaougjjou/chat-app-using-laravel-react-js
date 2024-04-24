import { combineReducers } from "redux";
import refreshLoginSlice from "./reducers/refreshLoginSlice";


const RootReducer = combineReducers({
    refreshLogin : refreshLoginSlice
})


export default RootReducer;