import React from 'react';
import * as ITunesActions from '../Actions/ActionsTypes'
/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  fetching: null,
  payload: null,
  error: null,
  errorMessage:null
}

const ITunesReducers  = (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE
  }
  const { payload, errorMessage } = action

  switch (action.type) {
   
    case ITunesActions.SEARCH_ITUNES_ACTION:
      return { ...state, fetching: true, payload: null, errorMessage: null }
    case ITunesActions.SEARCH_ITUNES_ACTION_SUCCESS_ACTION:
      return { ...state, fetching: false, error: null, errorMessage: null, payload }
    case ITunesActions.SEARCH_ITUNES_ACTION_FAILURE_ACTION:
      return { ...state, fetching: false, error: true, errorMessage: errorMessage }
    default:
      return state
  }
}
export default ITunesReducers