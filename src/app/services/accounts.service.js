import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const getAssets = async () => {
    // const data = localStorageService.getAssets();
    const response = await httpService.get("rONENzS9HHw-/data");
    return response;
};

const getIncome = async () => {
    const response = await httpService.get("NfaQRDuEHmV4/data");
    return response;
};

const getExpenses = async () => {
    const response = await httpService.get("LvEfgIS60yfs/data");
    return response;
};

const fetchAll = async () => {
    const [{ data: assets }, { data: income }, { data: expenses }] =
        await Promise.all([getAssets(), getIncome(), getExpenses()]);
    return { data: [].concat(assets, income, expenses) };
};

export default { getAssets, getIncome, getExpenses, fetchAll };
