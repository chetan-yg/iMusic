import apisauce from 'apisauce'
import { NativeModules } from 'react-native'
import { AppConstants, WebConstants } from '../Constants'

const create = (baseURL = WebConstants.BASE_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    timeout: AppConstants.INT.API_TIMEOUT,
  })

  // api calls
  const searchTunes = (params) => api.get(WebConstants.SEARCH_URL, params)
 
  api.addRequestTransform((response) => {
  })

  api.addResponseTransform((response) => {
 
    if (response.headers && response.headers.access_token) {
    }
  })



  return {
    searchTunes,
  }
}

export default {
  create,
}
