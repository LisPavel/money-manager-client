import localStorageService from "./localStorage.service";

const fetchAll = async () => {
    const data = localStorageService.getAccountTypes();
    return { data };
};

export default { fetchAll };
