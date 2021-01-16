
import { call, put, delay } from 'redux-saga/effects'
import * as ITunesActions from '../Redux/Actions/ITunesActions';

const TAG = 'searchItunes';

export function* searchItunesSagas(api, action) {
  const { params } = action
  const response = yield call(api.searchTunes, params)
  // console.log(TAG, 'response ' + JSON.stringify(response))
  //success?
  if (response.ok && response.data !== null) {
    yield put(ITunesActions.searchItunesSuccessAction(response.data, params))
  } else if (response.data !== null && response.data.message !== null) {
    let errorMessage = response.data.message
    yield put(ITunesActions.searchItunesFailureAction(errorMessage))
  } else {
    yield put(ITunesActions.searchItunesFailureAction(AppConstants.STRINGS.SOMETHING_WENT_WRONG))
  }
}
