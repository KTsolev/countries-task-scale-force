import { counterSlice } from '../countriesSlice';
// eslint-disable-next-line jest/no-mocks-import
import * as States from '../../__mocks__/mockedStates';
// eslint-disable-next-line jest/no-mocks-import
import jsonCountries from '../../__mocks__/mockedParsedJSON';
import {   
    fetchCountries, 
    fetchCountriesSuccess,
    fetchCountriesFailure,
    beginUserAction,
    selectCountry,
    fetchCountryByName,
    cancelUserAction
} from '../countriesSlice';

const mockedCountries = jsonCountries;

describe('Countries slice test', () => {
    it('should set handle countries/fetchCountries', () => {
        let state = counterSlice.reducer(States.mockedEmptyState, fetchCountries({page: 1, itemsPerPage: 50}))
        expect(state).toEqual(States.mockedLoadingState);
    });
    it('should set handle countries/fetchCountriesSuccess', () => {
        let state = counterSlice.reducer(States.mockedEmptyState, fetchCountriesSuccess({...mockedCountries}))
        expect(state).toEqual(States.mockedSuccessState);
    });
    it('should set handle countries/fetchCountriesFailure', () => {
        let state = counterSlice.reducer(States.mockedEmptyState, fetchCountriesFailure({error: 'some error'}))
        expect(state).toEqual(States.mockedErrorState);
    });
    it('should set handle countries/selectCountry', () => {
        let state = counterSlice.reducer(States.mockedEmptyState, selectCountry(mockedCountries.items[7]))
        expect(state).toEqual(States.mockedSelectedState);
    });
    it('should set handle countries/beginUserAction', () => {
        let state = counterSlice.reducer(States.mockedEmptyState, beginUserAction(mockedCountries.items[7]))
        expect(state).toEqual(States.mockedEmptyState);
    });
    it('should set handle countries/cancelUserAction', () => {
        let state = counterSlice.reducer(States.mockedEmptyState, cancelUserAction(null))
        expect(state).toEqual(States.mockedEmptyState);
    });
    it('should set handle countries/fetchCountryByName', () => {
        let state = counterSlice.reducer(States.mockedEmptyState, fetchCountryByName({name: 'ro'}))
        expect(state).toEqual(States.mockedLoadingState);
    });
})