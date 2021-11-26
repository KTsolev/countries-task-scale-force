import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { CountriesList } from '../Countries/Countries';
import { CountryDetails } from '../CountryDetails/CountryDetails';
import { NotFoundPage } from '../NotFound/NotFound';

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
                <Route exact path="/" children={<CountriesList />} />
                <Route path="/details" children={<CountryDetails />} />
                <Route path="*" children={<NotFoundPage />} />
              </Switch>
            </Router>
        </Provider>
      </div>
  );
}

export default App;