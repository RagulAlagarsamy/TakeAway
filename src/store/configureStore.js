
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer  from "./user";
import api from "../middleware/api";


export default function (){
    const store = configureStore({reducer,
    middleware: [
        ...getDefaultMiddleware(),
        api
    ]},applyMiddleware(thunk))
    return store;
}