import React from 'react';
import * as ITunesActions from '../Actions/ActionsTypes';
import {REHYDRATE} from 'redux-persist/lib/constants';
/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  fetching: null,
  payload: null,
  error: null,
  errorMessage: null,
};

const ITunesReducers = (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }
  const {payload, errorMessage} = action;

  switch (action.type) {
    case ITunesActions.SEARCH_ITUNES_ACTION:
      return {...state, fetching: true, errorMessage: null};
    case ITunesActions.SEARCH_ITUNES_SUCCESS_ACTION:
      return {
        ...state,
        fetching: false,
        error: null,
        errorMessage: null,
        payload,
      };
    case ITunesActions.SEARCH_ITUNES_FAILURE_ACTION:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: errorMessage,
      };
    case ITunesActions.SEARCH_ITUNES_OFFLINE_ACTION:
      return {
        ...state,
        fetching: false,
        error: false,
        errorMessage: false,
      };
    default:
      return state;
  }
};
export default ITunesReducers;
