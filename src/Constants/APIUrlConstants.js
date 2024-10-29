import { apiBaseUrl } from "../Profiles/Profile";

const baseUrl = apiBaseUrl.dev

const APIUrl = {
    getAllCountry: baseUrl + "all", 
    getCountryByName : baseUrl + "name/{name}"
}
export default APIUrl;