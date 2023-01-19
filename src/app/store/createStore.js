import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./accounts";

const rootReducer = combineReducers({
    accounts: accountsReducer,
});

export function createStore() {
    return configureStore({ reducer: rootReducer });
}
