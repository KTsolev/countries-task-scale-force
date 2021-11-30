import React from 'react';
import { CountryTile } from '../CountryTile';
import renderer, { act } from 'react-test-renderer';
// eslint-disable-next-line jest/no-mocks-import
import jsonCountries from '../../../__mocks__/mockedParsedJSON';

function createNodeMock(element) {
    if (element.type === 'div') {
      // This is your fake DOM node for <div>.
      // Feel free to add any stub methods, e.g. focus() or any
      // other methods necessary to prevent crashes in your components.
      return {};
    }
    // You can return any object from this method for any type of DOM component.
    // React will use it as a ref instead of a DOM node when snapshot testing.
    return null;
  }

  const mockDispatchFn = jest.fn();

  jest.mock('react-redux', () => ({
    useSelector: selector => selector(),
    useDispatch: () => mockDispatchFn
  }));


describe('CountryTile tests', () => {
  it('renders correctly wtihout props', () => {
    const tree = renderer.create(<CountryTile />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const tree = renderer.create(<CountryTile country={jsonCountries.items[2]} cssClassName='row' />);
    
    expect(tree.root.findAllByType('div')[0].props.className).toEqual('row country-tile');

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should handle onmousedown and onmouseup', () => {
    const options = {createNodeMock};
    
    const tree = renderer.create(<CountryTile country={jsonCountries.items[2]} cssClassName='row' />, options);
    
    let button = tree.root.findAllByProps({className: 'row country-tile'})[0];

    const action1 = {
        "payload": {
            "adminregion": {
                "id": "SAS", 
                "iso2code": "8S",
                 "value": "South Asia"
            }, 
            "capitalCity": 
            "Kabul", 
            "id": "AFG", 
            "incomeLevel": {
                "id": "LIC", 
                "iso2code": "XM", 
                "value": "Low income"
            }, 
            "iso2Code": "AF", 
            "latitude": "34.5228", 
            "lendingType": {
                "id": "IDX", 
                "iso2code": "XI", 
                "value": "IDA"
            }, 
            "longitude": "69.1761", 
            "name": "Afghanistan", 
            "region": {
                "id": "SAS", 
                "iso2code": "8S", 
                "value": "South Asia"}
            }, 
            "type": "countries/beginUserAction"};

    const action2 = {"payload": null, "type": "countries/cancelUserAction"}
      
    act(button.props.onMouseDownCapture);

    expect(mockDispatchFn).toHaveBeenCalledWith(action1);
    
    act(button.props.onMouseUpCapture);

    expect(mockDispatchFn).toHaveBeenLastCalledWith(action2);
  });

  
  it('should not handle onmousedown and onmouseup when dissableActions prop is passed', () => {
    const options = {createNodeMock};
    
    const tree = renderer
      .create(<CountryTile country={jsonCountries.items[2]} cssClassName='row' dissableActions />, options);
    
    let button = tree.root.findAllByProps({className: 'row country-tile'})[0];
      
    act(button.props.onMouseDownCapture);

    expect(mockDispatchFn).toHaveBeenCalledTimes(0);

    act(button.props.onMouseUpCapture);

    expect(mockDispatchFn).toHaveBeenCalledTimes(0);
  });
});