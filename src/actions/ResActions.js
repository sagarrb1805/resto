import { FETCH_RES } from "./types";


export const getRes = ()=> dispatch => {
        fetch("http://localhost:5000/restaurant")
        .then(response =>response.json)
        .then(res => dispatch({
            type:FETCH_RES,
            payload:res
        }))
        
      }