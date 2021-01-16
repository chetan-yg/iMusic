import React from 'react';

import {
  SEARCH_ITUNES_ACTION,
  SEARCH_ITUNES_ACTION_SUCCESS_ACTION,
  SEARCH_ITUNES_ACTION_FAILURE_ACTION,
} from './ActionsTypes'

export const searchItunesAction = (params) => {
  return {
    type: SEARCH_ITUNES_ACTION,
    params: params,
  }
}

export const searchItunesSuccessAction = (payload) => {
  return {
    type: SEARCH_ITUNES_ACTION_SUCCESS_ACTION,
    payload:payload
  }
}

export const searchItunesFailureAction = (errorMessage) => {
  return {
    type: SEARCH_ITUNES_ACTION_FAILURE_ACTION,
    errorMessage: errorMessage,
  }
}

