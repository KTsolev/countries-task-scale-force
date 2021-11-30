import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { CountriesList } from '../Countries/Countries';
import { CountryDetails } from '../CountryDetails/CountryDetails';
import { NotFoundPage } from '../NotFound/NotFound';
import { ErrorBoundary } from '../../shared_ui_components/CountriesErrorBoundary/CountriesErrorBoundary';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles.scss';

const App = () => {
  return (
      <div className="App">
        <Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/" children={
                  <ErrorBoundary>
                     <CountriesList />
                  </ErrorBoundary>} />
                <Route path="/details" children={
                  <ErrorBoundary>
                    <CountryDetails />
                  </ErrorBoundary>} />
                <Route path="*" children={<NotFoundPage />} />
              </Switch>
            </Router>
        </Provider>
      </div>
  );
}

export default App;
