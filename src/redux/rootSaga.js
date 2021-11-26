import { all } from 'redux-saga/effects';
import { watchCountriesSaga } from '../Screens/Countries/countriesSaga';

export function* rootSaga() {
    yield all([
        watchCountriesSaga(),
    ]);
};