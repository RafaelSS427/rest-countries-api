import { API_ALL_COUNTRIES, API_REGION_COUNTRY, API_SEARCH_COUNTRY, FIELDS_HOME } from '@/config'

type QueryParamType = string | null

export const getUrlHome = (query: QueryParamType, filter: QueryParamType) => {
  
  if(filter){
    return `${API_REGION_COUNTRY}/${filter}?${FIELDS_HOME}`
  }
  
  if(query){
    return `${API_SEARCH_COUNTRY}/${query}?${FIELDS_HOME}`
  }
  
  return API_ALL_COUNTRIES
}