export const FIELDS_HOME = 'fields=name,flags,population,region,capital'
export const FIELDS_COUNTRY = 'subregion,tld,currencies,languages,borders'
export const API_ALL_COUNTRIES = `https://restcountries.com/v3.1/all?${FIELDS_HOME}`
export const API_SEARCH_COUNTRY = 'https://restcountries.com/v3.1/name'
export const API_REGION_COUNTRY = 'https://restcountries.com/v3.1/region'