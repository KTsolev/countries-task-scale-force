import React from 'react';
import { NotFoundPage } from '../NotFound';
import renderer from 'react-test-renderer'; 

const mockedHistory = jest.fn();

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
      replace: mockedHistory,
    }),
  }));

describe('NotFoundPage tests', () => {
    it('should render component without props', () => {
       const tree = renderer.create(<NotFoundPage />);
        
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should handle on click', () => {
        const tree = renderer.create(<NotFoundPage />).root;
         
        const button = tree.findByProps({className: 'not-found-item'});

        expect(button).toBeTruthy();

        button.props.onClick();

        expect(mockedHistory).toHaveBeenCalled();
     });
});