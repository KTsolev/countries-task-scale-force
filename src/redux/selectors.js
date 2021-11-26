export const selectCountries = (state) => state.countries.result;
export const selectedCountry = (state) => state.countries.selectedCountry;
export const isLoading = (state) => state.countries.loading;
export const error = (state) => state.countries.error;

