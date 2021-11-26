import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { CountriesList } from '../Countries/Countries';
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
              </Switch>
            </Router>
        </Provider>
      </div>
  );
}

export default App;
