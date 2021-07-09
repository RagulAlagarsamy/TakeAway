
import axios from "axios";
import * as actions from "../store/api";
import firebase  from '../config/fbConfig';

const db = firebase.collection("/Orders");


const api = ({ dispatch }) => next => async action => {
    switch(action.type){
        case actions.apiCallBegan.type :
            next(action)

            const {url, method, data, onSuccess, onError } = action.payload;
        
            try{
                const response  = await axios.request({
                    url,
                    method,
                    data
                });
                //General
                dispatch(actions.apiCallSuccess(response.data));
                //Specific
                if(onSuccess) dispatch({ type: onSuccess, payload: response.data }); 
            }catch(error){
                //General
                dispatch(actions.apiCallFailure(error));
                //Specific
                dispatch({ type: onError, payload: error });
            }
            break;
        case actions.userAddItems.type :
            // next(action)
                const order = action.payload
                return db.add(order).then(ref =>{
                    console.log(ref);
                    next(action)
                })   
        case actions.userGetItems.type :
            console.log("db:",db.get());
            const items = db
            console.log(items);
            // next(action)
       default:
        next(action)
    }
}

export default api;