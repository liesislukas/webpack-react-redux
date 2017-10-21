import {takeLatest} from 'redux-saga/effects';
import {actionTypes} from 'features/user';

export default function* rootSaga() {
  yield takeLatest(actionTypes.GET_TRY, ({data}) => {
    console.log(`#kslfkds Todo ${actionTypes.GET_TRY}`, data);
  });
}
