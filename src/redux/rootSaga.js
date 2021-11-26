import { all } from 'redux-saga/effects';
import { watchCountriesSaga, watchUserAction } from './countriesSaga';

export function* rootSaga() {
    yield all([
        watchCountriesSaga(),
        watchUserAction()
    ]);
};