
import axios from "axios";
import * as actions from "../store/api";


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
       default:
        next(action)
    }
}

export default api;