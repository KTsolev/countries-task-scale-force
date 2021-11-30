/* eslint-disable jest/no-mocks-import */
import React from 'react';
import { PaginationButtons } from '../PaginationButtons';
import renderer from 'react-test-renderer';
import jsonCountries from '../../../__mocks__/mockedParsedJSON';

const mockedCountries = jsonCountries;

jest.mock('react-redux', () => ({
  useSelector: selector => selector(),
  useDispatch: () => jest.fn()
}));

jest.mock('../../../redux/selectors.js', () => ({
    selectCountries: () => mockedCountries
}));

describe('PaginationButtons tests', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    
    it('should render component without props', () => {
       const tree = renderer.create(<PaginationButtons />);
        
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render 6 butttons with curren one number 1 and should handle onclick', () => {
        const tree = renderer.create(<PaginationButtons itemsPerPage={50} />);

        expect(tree.root.findAllByType('span').length).toEqual(6);

        
        expect(tree.root.findAllByProps({className: 'pagination-controls-item pagination-controls-item--current'})[0].props.children).toEqual(1);
        expect(tree.toJSON()).toMatchSnapshot();
        const event = {
            currentTarget: {
                innerHTML: 3
            }
        }

        tree.root.findAllByType('span')[3].props.onClick(event);
        expect(tree.root.findAllByProps({className: 'pagination-controls-item pagination-controls-item--current'})[0].props.children).toEqual(1);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});