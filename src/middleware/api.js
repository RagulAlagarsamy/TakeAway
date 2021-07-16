
import * as actions from "../store/api";
import firebase  from '../config/fbConfig';

const db = firebase.collection("/Orders");


const api = ({ dispatch, getState }) => next => async action => {
    switch(action.type){
        case actions.userAddItems.type :
                const order = action.payload
                console.log(order);
                return db.add(order).then(ref =>{
                    next(action)
                })  
        case actions.userGetItems.type :
                const items = db
                console.log(items);
                break;
        case actions.adminUpdateProducts.type :
            next(action)
                dispatch(actions.updateProductDetails(action.payload))
                break;
        case actions.adminAddProducts.type :
                next(action)
                const lists =  getState().admin.searchList;
                dispatch(actions.addProductDetails(lists))
                break;
       default:
        next(action)
    }
}

export default api;