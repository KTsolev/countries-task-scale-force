import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from './countriesSlice';
import { rootSaga } from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: [logger, sagaMiddleware]
});

sagaMiddleware.run(rootSaga);