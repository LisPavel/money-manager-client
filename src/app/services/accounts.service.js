import localStorageService from "./localStorage.service";

const getAssets = async () => {
    const data = localStorageService.getAssets();
    return { data };
};

export default { getAssets };
