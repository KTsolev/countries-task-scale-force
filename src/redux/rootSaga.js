import { all } from 'redux-saga/effects';
import { watchCountriesSaga, watchUserAction } from '../Screens/Countries/countriesSaga';

export function* rootSaga() {
    yield all([
        watchCountriesSaga(),
        watchUserAction()
    ]);
};