import json from './counties..mock.json';

const getCountries = jest.fn().mockImplementation(() => {
  return json;
});

export default getCountries;