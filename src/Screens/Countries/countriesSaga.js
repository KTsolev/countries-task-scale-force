import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getCountries } from '../../network/endpoints';
import { 
    fetchCountries,
    fetchCountriesSuccess,
    fetchCountriesFailure,
} from './countriesSlice';
import { selectCountries } from './selectors';

export function* watchCountriesSaga () {
    yield takeLatest(fetchCountries.type, fetchCountriesInit);
   //  yield takeLatest(beginUserAction.type, bgTask);


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