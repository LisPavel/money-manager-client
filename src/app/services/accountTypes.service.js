import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const fetchAll = async () => {
    const response = await httpService.get("DDgHZ_wgJbG8/data");
    // const data = localStorageService.getAccountTypes();
    return response;
};

export default { fetchAll };
