
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer  from "./user";
import api from "../middleware/api";
import logger from "redux-logger";



export default function configure(){
    const store = configureStore({reducer,
    middleware: [
        ...getDefaultMiddleware(),
        api,
        logger
    ]})
    return store;
}