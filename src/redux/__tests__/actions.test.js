import {   
    fetchCountries, 
    fetchCountriesSuccess,
    fetchCountriesFailure,
    selectCountry,
    cancelUserAction,
    beginUserAction,
    fetchCountryByName
} from '../countriesSlice';
import configureMockStore from 'redux-mock-store';
// eslint-disable-next-line jest/no-mocks-import
import jsonCountries from '../../__mocks__/mockedParsedJSON';

const mockedCountries = jsonCountries;
const middlewares = [];
const mockStore = configureMockStore(middlewares);
const initialState = {
    error: null,
    selectedCountry: null,
    loading: false,
    results: []
};

let store, action, expectedAction;

describe('countries actions tests',() => {
    beforeEach(() => {
        store = mockStore(initialState)
    });

    it('should dispatch fetchCountries', () => {
        store.dispatch(fetchCountries({page:1, itemsPerPage:50}));
        action = store.getActions();
        expectedAction = [{ type: 'countries/fetchCountries', payload: { page: 1, itemsPerPage: 50 } }];
        expect(action).toEqual(expectedAction)
    });

    it('should dispatch fetchCountriesFailure', () => {
        store.dispatch(fetchCountriesFailure({error: 'some error'}));
        action = store.getActions();
        expectedAction = [{ type: 'countries/fetchCountriesFailure', payload: { error: 'some error' } }];
        expect(action).toEqual(expectedAction)
    });

    it('should dispatch fetchCountriesSuccess', () => {
        store.dispatch(fetchCountriesSuccess({...mockedCountries}));
        action = store.getActions();
        expectedAction = [{ type: 'countries/fetchCountriesSuccess', payload: {...mockedCountries} }];
        expect(action).toEqual(expectedAction)
    });

    it('should dispatch selectCountry', () => {
        store.dispatch(selectCountry(mockedCountries.items[6]));
        action = store.getActions();
        expectedAction = [{ type: 'countries/selectCountry', payload: mockedCountries.items[6] }];
        expect(action).toEqual(expectedAction)
    });

    it('should dispatch beginUserAction', () => {
        store.dispatch(beginUserAction(mockedCountries.items[6]));
        action = store.getActions();
        expectedAction = [{ type: 'countries/beginUserAction', payload: mockedCountries.items[6] }];
        expect(action).toEqual(expectedAction)
    });

    it('should dispatch cancelUserAction', () => {
        store.dispatch(cancelUserAction(null));
        action = store.getActions();
        expectedAction = [{ type: 'countries/cancelUserAction', payload: null }];
        expect(action).toEqual(expectedAction)
    });
    it('should dispatch fetchCountryByName', () => {
        store.dispatch(fetchCountryByName({name: 'ro'}));
        action = store.getActions();
        expectedAction = [{ type: 'countries/fetchCountryByName', payload: { name: 'ro'} }];
        expect(action).toEqual(expectedAction)
    });
})