import React from 'react';
import { TableHeader } from '../TableHeader';
import renderer, { create, act } from 'react-test-renderer';

const onPress = jest.fn();

describe('TableHeader tests', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TableHeader />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when all props are passed', () => {
    const tree = renderer
      .create(<TableHeader onPress={onPress} className='row' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle onclick', () => {
    const tree = create(<TableHeader onPress={onPress} />).root;

    const button = tree.findAllByType('span')[1];

    expect(tree.findAllByType('span').length).toEqual(5);
    
    act(button.props.onClick);

    expect(onPress).toHaveBeenCalled();
  });
})
