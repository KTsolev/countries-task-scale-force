import { call, put, takeLatest, select, take, race, spawn, delay } from 'redux-saga/effects';
import { getCountries } from '../network/endpoints';
import { 
    fetchCountries,
    fetchCountriesSuccess,
    fetchCountriesFailure,
    cancelUserAction,
    beginUserAction,
    selectCountry
} from './countriesSlice';
import { selectCountries } from './selectors';

export function* watchCountriesSaga () {
    yield takeLatest(fetchCountries.type, fetchCountriesInit);
}

function* fetchCountriesInit(action) {
    try {
      const { page, itemsPerPage, reload } = action.payload;
      const countries = yield select(selectCountries);
      let result;
      
      if (countries.result && !reload ) {
         result = { ...countries };
         yield put(fetchCountriesSuccess({ ...result }));
      } else {
         result = yield call(getCountries,  page, itemsPerPage);
         yield put(fetchCountriesSuccess({...result.data[0], items: result.data[1] }));
      }

   } catch (error) {
      yield put(fetchCountriesFailure(error));
   }
}

export function* watchUserAction() {
    while (true) {
       let action = yield take(beginUserAction.type);
       yield spawn(bgTask, action);
    }
 }
 
 function* bgTask (task) {
    const selected = task.payload;
    const { undo } = yield race({
       undo: take((action) => {
          return action.type === cancelUserAction.type;
       }),
       proceed: delay(3000)
    });
    
    if (undo) {
       yield put(cancelUserAction(null));
    } else {
       yield put(selectCountry(selected));
    }
 }