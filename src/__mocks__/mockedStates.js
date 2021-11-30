import jsonCountries from './mockedParsedJSON';

export const mockedSuccessState = {
    loading: false,
    error: null,
    selectedCountry: null,
    result: {...jsonCountries}
}

export const mockedEmptyState = {
    loading: false,
    error: null,
    selectedCountry: null,
    result: []
}

export const mockedLoadingState = {
    loading: true,
    error: null,
    selectedCountry: null,
    result: []
}

export const mockedErrorState = {
    loading: false,
    error: { error: 'some error' },
    selectedCountry: null,
    result: []
}

export const mockedSelectedState = {
    loading: false,
    error: null,
    selectedCountry: jsonCountries.items[7],
    result: []
}