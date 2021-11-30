import React from 'react';
import { ErrorHandler } from '../ErrorHandler';
import renderer, { create, act } from 'react-test-renderer';

const onPress = jest.fn();

describe('ErrorHandler tests', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ErrorHandler />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when all props are passed', () => {
    const tree = renderer
      .create(<ErrorHandler onPress={onPress} title='Something went wrong!' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle onclick', () => {
    const tree = create(<ErrorHandler onPress={onPress} title='Something went wrong!' />).root;

    const button = tree.findAllByType('span')[0];
    
    act(button.props.onClick);

    expect(onPress).toHaveBeenCalled();
  });
})
