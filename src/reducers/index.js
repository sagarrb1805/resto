import { CombinedReducers } from "redux";
import resReducer from './resReducer'


export default combineReducers(
    {
        res: resReducer
    }
)