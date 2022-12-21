import accountTypes from "../mock/accountTypes.json";
const ACCOUNT_TYPES_KEY = "accountTypes";

const getAccountTypes = () =>
    JSON.parse(localStorage.getItem(ACCOUNT_TYPES_KEY) || "");
const setAccountTypes = (accountTypes) =>
    localStorage.setItem(ACCOUNT_TYPES_KEY, JSON.stringify(accountTypes));

(() => {
    setAccountTypes(accountTypes);
})();

export default {
    getAccountTypes,
    setAccountTypes,
};
