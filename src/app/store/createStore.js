import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./accounts";
import transactionsReducer from "./transactions";

const rootReducer = combineReducers({
    accounts: accountsReducer,
    transactions: transactionsReducer,
});

export function createStore() {
    return configureStore({ reducer: rootReducer });
}
