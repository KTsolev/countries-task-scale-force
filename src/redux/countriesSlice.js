import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    loading: true,
    error: null,
    selectedCountry: null,
    result: []
  }
  
  export const counterSlice = createSlice({
    name: 'countries',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      fetchCountries: (state, action) => {
        return {
          ...state,
          error: null,
          loading: true
        };
      },
      fetchCountriesSuccess: (state, action) => {
        return {
            ...state,
            loading: false,
            result: action.payload
        };
      },
      fetchCountriesFailure: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
      },
      cancelUserAction: (state, action) => {
        return {
          ...state,
          selectedCountry: null
        };
      },
      beginUserAction: (state, action) => {
        return {
          ...state,
        };
      },
      selectCountry: (state, action) => {
        return {
          ...state,
          selectedCountry: action.payload,
        };
      },
      fetchCountryByName: (state, action) => {
        return {
          ...state,
          loading: true
        };
      },
    },
  });

export const { 
  fetchCountries, 
  fetchCountriesSuccess,
  fetchCountriesFailure,
  selectCountry,
  fetchCountryByName,
  cancelUserAction,
  beginUserAction
 } = counterSlice.actions;

export const countriesReducer = counterSlice.reducer;