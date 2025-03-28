import createSagaMiddleware from 'redux-saga'
import { configureStore, Tuple } from '@reduxjs/toolkit'
import { all } from 'redux-saga/effects'
import {sampleSaga, sampleSlice} from "src/features/sample/sampleReducer.jsx";

const reducers = {
    sampleReducer: sampleSlice.reducer,

}

export function* rootSaga() {
    yield all([
        sampleSaga(),
    ])
}


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: reducers,
    middleware: () => new Tuple(sagaMiddleware),
    // devTools: process.env.NODE_ENV !== 'production', 보여지는 여부
})

sagaMiddleware.run(rootSaga)
export default store
