import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const getAssets = async () => {
    // const data = localStorageService.getAssets();
    const response = await httpService.get("rONENzS9HHw-/data");
    return response;
};

export default { getAssets };
