import React from 'react';
import { CountriesList } from '../Countries';
import renderer, { act } from 'react-test-renderer'; 
import { selectCountries, selectedCountry, isLoading, error } from '../../../redux/selectors';
// eslint-disable-next-line jest/no-mocks-import
import jsonCountries from '../../../__mocks__/mockedParsedJSON';

const mockedHistoryReplace = jest.fn();
const mockedHistoryPush = jest.fn();
const mockDispatchFn = jest.fn();
const mockedCountries = jsonCountries;
const action = {"payload": {"itemsPerPage": 50, "page": 1, "reload": false}, "type": "countries/fetchCountries"};


jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
    replace: mockedHistoryReplace,
  }),
}));

jest.mock('react-redux', () => ({
  useSelector: selector => selector(),
  useDispatch: () => mockDispatchFn
}));

 jest.mock('../../../redux/selectors.js', () => ({
    selectCountries: jest.fn(),
    selectedCountry: jest.fn(),
    isLoading: jest.fn(),
    error: jest.fn(),
}));

describe('CountriesList tests', () => {  
    beforeEach(() => {
      jest.resetAllMocks();
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
    
    it('should render isLoading state', async() => {
       selectCountries.mockReturnValue({
           page: 1,
           pages: 0,
           per_page: 50,
           total: 0,
           items: []
       });
       selectedCountry.mockReturnValue(null);
       isLoading.mockReturnValue(true);
       error.mockReturnValue(null);

       const tree = renderer.create(<CountriesList />);
       await act(async() => renderer.create(<CountriesList />));
       expect(mockDispatchFn).toHaveBeenCalledWith(action);
       expect(tree.toJSON()).toMatchSnapshot();
    });


      
    it('should render empty state', async() => {
        selectCountries.mockReturnValue({
            page: 1,
            pages: 0,
            per_page: 50,
            total: 0,
            items: []
        });
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
 
        const tree = renderer.create(<CountriesList />);
        await act(async() => renderer.create(<CountriesList />));
        expect(mockDispatchFn).toHaveBeenCalledWith(action);
        expect(tree.toJSON()).toMatchSnapshot();
     });
 

    
    it('should render error state', () => {
        selectCountries.mockReturnValue({
            page: 0,
            pages: 0,
            per_page: 0,
            total: 0,
            items: []
        });
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue('Something went wrong!');
 
        const tree = renderer.create(<CountriesList />);
        expect(tree.toJSON()).toMatchSnapshot();
     });

     
    it('should render error state and handle onclick', () => {
        selectCountries.mockReturnValue({
            page: 0,
            pages: 0,
            per_page: 0,
            total: 0,
            items: []
        });
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue('Something went wrong!');
 
        const tree = renderer.create(<CountriesList />);
        const button = tree.root.findByProps({className: 'error-page-button'});

        expect(button).toBeTruthy();
        act(button.props.onClick);

        expect(mockDispatchFn).toHaveBeenCalledWith(action);
     });

     it('should render error state from api', () => {
        selectCountries.mockReturnValue({
            page: 0,
            pages: 0,
            per_page: 0,
            total: 0,
            items: []
        });
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue({
            data: { message: [
            {
                id: 120,
                key: 'Invalid value',
                value: 'The provided parameter value is not valid'
            }
        ]}});
 
        const tree = renderer.create(<CountriesList />);
        const button = tree.root.findByProps({className: 'error-page-button'});

        expect(button).toBeTruthy();
        act(button.props.onClick);

        expect(mockDispatchFn).toHaveBeenCalledWith(action);
     });

     it('should render fetched state', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
 
        const tree = renderer.create(<CountriesList />);

        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should handle sort by name', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        let headerButtons = tree.root.findByProps({className: 'list-header'});
        const event = {
            currentTarget: {
                dataset: {
                    prop: 'Name'
                }
            }
        }
        expect(headerButtons.children.length).toEqual(5);
        act(() => headerButtons.children[2].props.onClick(event));
        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should handle sort by isocode', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        let headerButtons = tree.root.findByProps({className: 'list-header'});
        const event = {
            currentTarget: {
                dataset: {
                    prop: 'Iso Code'
                }
            }
        }
        act(() => headerButtons.children[0].props.onClick(event));
        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should handle sort by capital city', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        let headerButtons = tree.root.findByProps({className: 'list-header'});
        const event = {
            currentTarget: {
                dataset: {
                    prop: 'Capital City'
                }
            }
        }
        act(() => headerButtons.children[0].props.onClick(event));
        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should handle sort by longitude', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        let headerButtons = tree.root.findByProps({className: 'list-header'});
        const event = {
            currentTarget: {
                dataset: {
                    prop: 'Longitude'
                }
            }
        }
        act(() => headerButtons.children[0].props.onClick(event));
        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should handle sort by latitude', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        let headerButtons = tree.root.findByProps({className: 'list-header'});
        const event = {
            currentTarget: {
                dataset: {
                    prop: 'Latitude'
                }
            }
        }
        act(() => headerButtons.children[0].props.onClick(event));
        expect(tree.toJSON()).toMatchSnapshot();
     });

     
     it('should not handle sort', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        let headerButtons = tree.root.findByProps({className: 'list-header'});
        const event = {
            currentTarget: {
                dataset: {
                    prop: 'Lalo'
                }
            }
        }
        act(() => headerButtons.children[0].props.onClick(event));
        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should handle filtration', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        let input = tree.root.findByProps({name: 'filterBy'});
        const event = {
            currentTarget: {
               value: 'ce'
            }
        }
        expect(input).toBeTruthy();
        act(() => input.props.onChange(event));

        expect(tree.toJSON()).toMatchSnapshot();
     });

     
     it('should handle debounced search by name', async() => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const timeout = true;

        const tree = renderer.create(<CountriesList />);
        const action = {
            type: 'countries/fetchCountryByName',
            payload: {
                name: 'ce'
            }
        };
        let input = tree.root.findByProps({name: 'searchByName'});
        
        const event = {
            currentTarget: {
               name: 'searchByName',
               value: 'ce'
            }
        }
        
        expect(input).toBeTruthy();
        
        act(() => input.props.onChange(event));

        await new Promise(r => setTimeout(r, 900));
        expect(timeout).toBeTruthy();
        
        expect(mockDispatchFn).toHaveBeenLastCalledWith(action);
        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should get all countries when searchByName field is empty', async() => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const timeout = true;

        const tree = renderer.create(<CountriesList />);
        const action = {
            type: 'countries/fetchCountries',
            payload: {
                page: 1,
                itemsPerPage: '50',
                reload: false
            }
        };
        let input = tree.root.findByProps({name: 'searchByName'});
        
        const event = {
            currentTarget: {
               name: 'searchByName',
               value: ''
            }
        }
        
        expect(input).toBeTruthy();
        
        act(() => input.props.onChange(event));

        await new Promise(r => setTimeout(r, 900));
        expect(timeout).toBeTruthy();
        
        expect(mockDispatchFn).toHaveBeenLastCalledWith(action);
        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should reset filtration', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        let input = tree.root.findByProps({name: 'filterBy'});
        const event = {
            currentTarget: {
               value: ''
            }
        }
        expect(input).toBeTruthy();
        act(() => input.props.onChange(event));

        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should handle onSelect', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(null);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        let input = tree.root.findByProps({name: 'per_page'});
        const event = {
            target: {
               value: 100
            }
        }
        expect(input).toBeTruthy();
        act(() => input.props.onChange(event));

        expect(tree.toJSON()).toMatchSnapshot();
     });

     it('should handle redirect to details page when country is selected', () => {
        selectCountries.mockReturnValue(mockedCountries);
        selectedCountry.mockReturnValue(mockedCountries.items[5]);
        isLoading.mockReturnValue(false);
        error.mockReturnValue(null);
        const tree = renderer.create(<CountriesList />);
        tree.update();
   
        expect(mockedHistoryPush).toHaveBeenCalledWith('/details');
        expect(tree.toJSON()).toMatchSnapshot();
     });
});
