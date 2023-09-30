// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga'
import productSaga from "./productSaga";

// const store = createStore(rootReducer)
const sagaMiddleWare=createSagaMiddleware()
const store = configureStore({
    reducer:rootReducer,
    middleware:()=> [sagaMiddleWare]
})
sagaMiddleWare.run(productSaga)
export default store;