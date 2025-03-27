import createSagaMiddleware from 'redux-saga'
import {configureStore, Tuple} from "@reduxjs/toolkit";
import { all } from 'redux-saga/effects'

const reducers = {

}

export function* rootSaga() {
    yield all([])
}






const store = configureStore({
    reducer: reducers,
    middleware:  () => new Tuple(sagaMiddleware),
    // devTools: process.env.NODE_ENV !== 'production', 보여지는 여부
})

const sagaMiddleware = createSagaMiddleware()
sagaMiddleware.run(rootSaga)
export default store