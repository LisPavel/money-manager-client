// import accountTypes from "../mock/accountTypes.json";
// import assets from "../mock/assets.json";
const ACCOUNT_TYPES_KEY = "accountTypes";
const ASSETS_KEY = "assets";
const USER_ID_KEY = "userId";
const ACCESS_TOKEN_KEY = "access";
const REFRESH_TOKEN_KEY = "refresh";

const getAccountTypes = () =>
    JSON.parse(localStorage.getItem(ACCOUNT_TYPES_KEY) || "");
const setAccountTypes = (accountTypes) =>
    localStorage.setItem(ACCOUNT_TYPES_KEY, JSON.stringify(accountTypes));

const getUserId = () => localStorage.getItem(USER_ID_KEY);
const setUserId = (userId) => localStorage.setItem(USER_ID_KEY, userId);

const getAssets = () => JSON.parse(localStorage.getItem(ASSETS_KEY));
const setAssets = (accounts) =>
    localStorage.setItem(ASSETS_KEY, JSON.stringify(accounts));

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN_KEY, token);
const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
const setRefreshToken = (token) =>
    localStorage.setItem(REFRESH_TOKEN_KEY, token);

(() => {
    setAccessToken("t0tsn1zwlj33vrl2it0jzsqystd9fcvdzkn4fhca");
})();

export default {
    getAccountTypes,
    setAccountTypes,
    getUserId,
    setUserId,
    getAssets,
    setAssets,
    getAccessToken,
    setAccessToken,
    getRefreshToken,
    setRefreshToken,
};
