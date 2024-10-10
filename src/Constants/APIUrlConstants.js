import { apiBaseUrl } from "../Profiles/Profile";

const baseUrl = apiBaseUrl.dev

const APIUrl = {
    supplierItemSave: baseUrl + "Api/Item-Supplier/Save-Items-Suppliers",
    getAllCountry: baseUrl + "Api/countrystatecity/Get-All-CountryList",
    getAllState: baseUrl + "Api/countrystatecity/Get-All-SateList-By-Country?countryId={countryId}",
    getAllCities: baseUrl + "Api/countrystatecity/Get-All-CityList-By-Country-State?countryId={couontryId}&stateId={stateId}",
    getAllSuppliers: baseUrl + "Api/countrystatecity/Get-All-SuppliersList" // API NOT FOUND IN Document I am USING DUMMY DATA
}
export default APIUrl;