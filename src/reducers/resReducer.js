import { FETCH_RES } from "../actions/types";

const initialState = {
    items: [],
    
};


export default function(state=initialState, action){
    switch(action.type){
        case FETCH_RES:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
        
    }
}
