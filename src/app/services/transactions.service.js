import httpService from "./http.service";

const fetchAll = async () => {
    // const data = localStorageService.getAssets();
    const response = await httpService.get("rxV7NDmUTaDG/data");
    return response;
};

export default { fetchAll };
