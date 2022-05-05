import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";

const rootReducer = combineReducers({
    carReducer
});

const setapStore=() => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setapStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setapStore
}