import { takeLatest,all } from 'redux-saga/effects';
import API from '../Services/Api';

const TAG = 'SagaIndex';

/* ------------- Types ------------- */
import {
  SEARCH_ITUNES_ACTION,
} from '../Redux/Actions/ActionsTypes'

import { searchItunesSagas } from './ITunesSagas';


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(SEARCH_ITUNES_ACTION, searchItunesSagas, api),
  ]);
}
