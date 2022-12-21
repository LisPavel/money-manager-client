import accountTypes from "../mock/accountTypes.json";
import assets from "../mock/assets.json";
const ACCOUNT_TYPES_KEY = "accountTypes";
const ASSETS_KEY = "assets";
const USER_ID_KEY = "userId";

const getAccountTypes = () =>
    JSON.parse(localStorage.getItem(ACCOUNT_TYPES_KEY) || "");
const setAccountTypes = (accountTypes) =>
    localStorage.setItem(ACCOUNT_TYPES_KEY, JSON.stringify(accountTypes));

const getUserId = () => localStorage.getItem(USER_ID_KEY);
const setUserId = (userId) => localStorage.setItem(USER_ID_KEY, userId);

const getAssets = () => JSON.parse(localStorage.getItem(ASSETS_KEY));
const setAssets = (accounts) =>
    localStorage.setItem(ASSETS_KEY, JSON.stringify(accounts));

(() => {
    setAccountTypes(accountTypes);
    setUserId("63a2eb6e12c0bce386539586");
    setAssets(assets);
})();

export default {
    getAccountTypes,
    setAccountTypes,
    getUserId,
    setUserId,
    getAssets,
    setAssets,
};
