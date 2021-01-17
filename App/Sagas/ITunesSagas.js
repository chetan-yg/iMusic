import { call, put } from 'redux-saga/effects';
import { StringsConstants } from '../Constants';
import * as ITunesActions from '../Redux/Actions/ITunesActions';

const TAG = 'searchItunes';

export function* searchItunesSagas(api, action) {
  const {params} = action;
  const response = yield call(api.searchTunes, params);
  //success?
  if (response.ok && response.data !== null) {
    yield put(ITunesActions.searchItunesSuccessAction(response.data, params));
  } else if (response.data !== null && response.data.message !== null) {
    let errorMessage = response.data.message;
    yield put(ITunesActions.searchItunesFailureAction(errorMessage));
  } else {
    yield put(
      ITunesActions.searchItunesOfflineAction(
        StringsConstants.SOMETHING_WENT_WRONG,
      ),
    );
  }
}
