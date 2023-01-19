import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import transactionsService from "../services/transactions.service";

const initialState = {
    entities: [],
    loading: true,
    error: null,
    lastFetch: null,
};

const transactionsSlice = createSlice({
    initialState,
    name: "transactions",
    reducers: {
        transactionsRequested(state) {
            state.loading = true;
        },
        transactionsRequestFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        transactionsRecieved(state, action) {
            state.loading = false;
            state.error = null;
            state.entities = action.payload;
            state.lastFetch = Date.now();
        },
    },
});

const { actions, reducer: transactionsReducer } = transactionsSlice;

const {
    transactionsRecieved,
    transactionsRequestFailed,
    transactionsRequested,
} = actions;

export const loadTransactions = () => async (dispatch, getState) => {
    const { lastFetch } = getState().transactions;
    if (!isOutdated(lastFetch)) return;
    dispatch(transactionsRequested());
    try {
        const { data } = await transactionsService.fetchAll();
        dispatch(transactionsRecieved(data));
    } catch (error) {
        dispatch(transactionsRequestFailed(error.message ?? error.error));
    }
};
export const getAllTransactions = () => (state) => {
    return state.transactions.entities;
};
export const getTransactionsByMonth = (month) => (state) => {
    const start = DateTime.fromMillis(month).startOf("month");
    const end = DateTime.fromMillis(month).endOf("month");
    return state.transactions.entities.filter(
        (tr) => tr.date >= start && tr.date <= end
    );
};
export const getTransactionsLoadingStatus = () => (state) =>
    state.transactions.loading;

export default transactionsReducer;

function isOutdated(date) {
    return Date.now() - date > 10 * 60 * 1000;
}
