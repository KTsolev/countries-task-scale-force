import {   
     fetchCountries, 
    fetchCountriesSuccess,
    fetchCountriesFailure,
    selectCountry,
    cancelUserAction,
    beginUserAction } from '../countriesSlice';

// eslint-disable-next-line jest/no-mocks-import
import jsonCountries from '../../__mocks__/mockedParsedJSON';
// eslint-disable-next-line jest/no-mocks-import
import responce from '../../__mocks__/response.json';
// eslint-disable-next-line jest/no-mocks-import
import { mockedSuccessState, mockedEmptyState } from '../../__mocks__/mockedStates';
import { expectSaga } from 'redux-saga-test-plan';
import { getCountries } from '../../network/endpoints';
import * as matchers from 'redux-saga-test-plan/matchers';
import * as Selectors from '../selectors';
import { throwError } from 'redux-saga-test-plan/providers';
import { watchCountriesSaga, watchUserAction, bgTask } from '../countriesSaga';

const mockedCountries = jsonCountries;

describe('fetchCountriesInit saga tests', () => {
    it('should load data from store, when data is present and its not refetch', () => {
        return expectSaga(watchCountriesSaga)
        .withState(mockedSuccessState)
        .provide([
            [
                matchers.call.fn(getCountries, 1, 50),
                {data: [...responce]}
            ],
            [matchers.select.selector(Selectors.error), null],
            [matchers.select.selector(Selectors.isLoading), false],
            [matchers.select.selector(Selectors.selectCountries), mockedCountries],
            [matchers.select.selector(Selectors.selectedCountry), null]

        ])
        .put(fetchCountriesSuccess({...mockedCountries}))
        .not.call(getCountries)
        .dispatch(fetchCountries(1,50))
        .run({ silenceTimeout: true });
    });

    it('should get data from api', () => {
        return expectSaga(watchCountriesSaga)
        .withState(mockedEmptyState)
        .provide([
            [
                matchers.call.fn(getCountries, 1, 50),
                {data: [...responce]}
            ],
            [matchers.select.selector(Selectors.error), null],
            [matchers.select.selector(Selectors.isLoading), false],
            [matchers.select.selector(Selectors.selectCountries), []],
            [matchers.select.selector(Selectors.selectedCountry), null]
        ])
        .put(fetchCountriesSuccess({...mockedCountries}))
        .dispatch(fetchCountries(1,50, true))
        .run({ silenceTimeout: true });
    });

    it('should handle error', () => {
        return expectSaga(watchCountriesSaga)
        .withState(mockedEmptyState)
        .provide([
            [
                matchers.call.fn(getCountries, 1, 50),
                throwError({error: 'Something went wrong'})
            ],
            [matchers.select.selector(Selectors.error), {error: 'Something went wrong'}],
            [matchers.select.selector(Selectors.isLoading), false],
            [matchers.select.selector(Selectors.selectCountries), []],
            [matchers.select.selector(Selectors.selectedCountry), null]
        ])
        .put(fetchCountriesFailure({error: 'Something went wrong'}))
        .dispatch(fetchCountries(1,50, true))
        .run({ silenceTimeout: true });
    });
})

describe('fetchCountriesInit bgTask saga tests', () => {
    it('should spawn saga', () => {
        return expectSaga(watchUserAction)
        .withState(mockedSuccessState)
        .provide([
            [
                matchers.call.fn(getCountries, 1, 50),
                {data: [...responce]}
            ],
            [matchers.select.selector(Selectors.error), null],
            [matchers.select.selector(Selectors.isLoading), false],
            [matchers.select.selector(Selectors.selectCountries), mockedCountries],
            [matchers.select.selector(Selectors.selectedCountry), null]

        ])
        .spawn(bgTask, beginUserAction(mockedCountries.items[6]))
        .dispatch(beginUserAction(mockedCountries.items[6]))
        .run({ silenceTimeout: true });
    });
    it('should dispatch cancelUserAction', () => {
        return expectSaga(watchUserAction)
        .withState(mockedSuccessState)
        .provide([
            [
                matchers.call.fn(getCountries, 1, 50),
                {data: [...responce]}
            ],
            [matchers.select.selector(Selectors.error), null],
            [matchers.select.selector(Selectors.isLoading), false],
            [matchers.select.selector(Selectors.selectCountries), mockedCountries],
            [matchers.select.selector(Selectors.selectedCountry), null]
        ])
        .dispatch(beginUserAction(mockedCountries.items[6]))
        .spawn(bgTask, beginUserAction(mockedCountries.items[6]))
        .put(cancelUserAction(null))
        .dispatch(cancelUserAction(null))
        .run({ silenceTimeout: true });
    });
    it('should dispatch selectCountry', () => {
        return expectSaga(watchUserAction)
        .withState(mockedSuccessState)
        .provide([
            [
                matchers.call.fn(getCountries, 1, 50),
                {data: [...responce]}
            ],
            [matchers.select.selector(Selectors.error), null],
            [matchers.select.selector(Selectors.isLoading), false],
            [matchers.select.selector(Selectors.selectCountries), mockedCountries],
            [matchers.select.selector(Selectors.selectedCountry), null],
            {
                race: () => ({ delay: undefined }),
            }

        ])
        .dispatch(beginUserAction(mockedCountries.items[6]))
        .spawn(bgTask, beginUserAction(mockedCountries.items[6]))
        .put(selectCountry(mockedCountries.items[6]))
        .run({ silenceTimeout: true });
    });
})