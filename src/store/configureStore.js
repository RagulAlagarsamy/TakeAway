
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer  from "./user";
import api from "../middleware/api";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/user'


const sagaMiddleware = createSagaMiddleware();



export default function configure(){
    const store = configureStore({reducer,
    middleware: [
        ...getDefaultMiddleware(),
        api,
        logger,
        sagaMiddleware
    ]})

    sagaMiddleware.run(rootSaga)
    return store;
}