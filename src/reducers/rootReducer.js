import { combineReducers } from "redux";
import headerReducer from "./headerReducer";

const rootReducer = combineReducers({
    headers: headerReducer
});

export default rootReducer;