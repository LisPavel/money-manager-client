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

export default { getAssets, getIncome, getExpenses };
