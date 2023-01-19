import { createSlice } from "@reduxjs/toolkit";
import accountsService from "../services/accounts.service";
import { ACCOUNT_TYPES } from "../utils/constants";

const initialState = {
    entities: [],
    isLoading: true,
    error: null,
};

const accountsSlice = createSlice({
    initialState,
    name: "accounts",
    reducers: {
        accountsRequested(state) {
            state.isLoading = true;
        },
        accountsRecieved(state, action) {
            state.isLoading = false;
            state.error = null;
            state.entities = action.payload;
        },
        accountsRequestFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

const { actions, reducer: accountsReducer } = accountsSlice;

const { accountsRecieved, accountsRequestFailed, accountsRequested } = actions;

export const loadAccountsList = () => async (dispatch) => {
    dispatch(accountsRequested());
    try {
        const { data } = await accountsService.fetchAll();
        dispatch(accountsRecieved(data));
    } catch (error) {
        dispatch(accountsRequestFailed(error.message ?? error.error));
    }
};

export const getAllAccounts = () => (state) => {
    return state.accounts.entities;
};

export const getExpenses = () => (state) => {
    return state.accounts.entities.filter(
        ({ type }) => type === ACCOUNT_TYPES.EXPENSE
    );
};
export const getAssets = () => (state) => {
    return state.accounts.entities.filter(
        ({ type }) => type === ACCOUNT_TYPES.ASSET
    );
};
export const getIncome = () => (state) => {
    return state.accounts.entities.filter(
        ({ type }) => type === ACCOUNT_TYPES.INCOME
    );
};
export const getAccountsLoadingStatus = () => (state) => {
    return state.accounts.isLoading;
};
export const getAccountById = (id) => (state) => {
    return state.accounts.entities?.find?.(({ _id }) => _id === id);
};

export default accountsReducer;
