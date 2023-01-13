import { orderBy } from "lodash";
import httpService from "./http.service";

const fetchAll = async () => {
    // const data = localStorageService.getAssets();
    const response = await httpService.get("rxV7NDmUTaDG/data");

    response.data = orderBy(response.data, "date", "desc");
    return response;
};

export default { fetchAll };
