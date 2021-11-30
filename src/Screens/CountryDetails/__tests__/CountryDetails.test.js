import React from 'react';
import { CountryDetails } from '../CountryDetails';
import renderer, { act } from 'react-test-renderer'; 
import { selectedCountry } from '../../../redux/selectors';
// eslint-disable-next-line jest/no-mocks-import
import jsonCountries from '../../../__mocks__/mockedParsedJSON';

const mockedHistory = jest.fn();
const mockDispatchFn = jest.fn();
const mockedCountries = jsonCountries;

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
    replace: mockedHistory,
  }),
}));

jest.mock('react-redux', () => ({
  useSelector: selector => selector(),
  useDispatch: () => mockDispatchFn
}));

jest.mock('../../../redux/selectors.js', () => ({
    selectedCountry: jest.fn()
}));

describe('CountryDetails tests', () => {
      
    afterEach(() => {
      jest.resetAllMocks();
    });
    
    it('should not render country details when no selected country and should navigate to main screen', () => {
       selectedCountry.mockReturnValueOnce(null);
       const tree = renderer.create(<CountryDetails />);
       expect(mockedHistory).toHaveBeenCalled(); 
       expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render country details', () => {
      selectedCountry.mockReturnValueOnce(mockedCountries.items[4]);

      const tree = renderer.create(<CountryDetails />);
      expect(tree.toJSON()).toMatchSnapshot();
    });

   it('should redirect to main screen when back button is clicked', () => {
      selectedCountry.mockReturnValueOnce(mockedCountries.items[4]);
      const tree = renderer.create(<CountryDetails />).root;
      const button = tree.findAllByProps({className: 'details-item'})[0];

      button.props.onClick();
      expect(mockedHistory).toHaveBeenCalled(); 
   });

   it('should call cleanup function when unmounted', () => {
      selectedCountry.mockReturnValueOnce(mockedCountries.items[4]);
      jest.spyOn(React, "useEffect").mockImplementationOnce(cb => cb()());
      
      const action = {"payload": null, "type": "countries/cancelUserAction"};
      const tree = renderer.create(<CountryDetails />);

      act(tree.unmount);
    
      expect(mockDispatchFn).toHaveBeenCalledWith(action); 
  });
});
