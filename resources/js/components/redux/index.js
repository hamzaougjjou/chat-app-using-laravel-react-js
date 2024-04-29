import { combineReducers } from "redux";
import refreshLoginSlice from "./reducers/refreshLoginSlice";


const RootReducer = combineReducers({
    Auth : refreshLoginSlice
})


export default RootReducer;