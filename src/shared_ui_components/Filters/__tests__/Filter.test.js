/* eslint-disable jest/no-mocks-import */
import React from 'react';
import { Filters } from '../Filters';
import renderer, { act } from 'react-test-renderer';

const onChange = jest.fn();

const onSelect = jest.fn();

describe('Filters tests', () => {
    it('should render component without props', () => {
        const tree = renderer.create(<Filters />);
            
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render component with props', () => {
        const tree = renderer.create(<Filters filterBy='ard' itemsPerPage={50} />);
        
        expect(tree.root.findByType('input').props.value).toBe('ard');
        expect(tree.root.findByType('select').props.value).toBe(50);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    
    it('should onChange and OnSelect', async () => {
        const tree = renderer.create(<Filters filterBy='AU' onChange={onChange} itemsPerPage={100} onSelect={onSelect} />);
        
        const input = tree.root.findByType('input');
        const select = tree.root.findByType('select');

        const mEvent = { target: { value: 'AU' } };
        const sEvent = { target: { value: 100 } };

        act(() => {
          input.props.onChange(mEvent);
        });

        act(() => {
            select.props.onChange(sEvent);
        });

        expect(onChange).toHaveBeenCalledWith(mEvent);
        expect(onSelect).toHaveBeenCalledWith(sEvent);

        expect(input.props.value).toEqual('AU');
        expect(select.props.value).toEqual(100);

        expect(tree.toJSON()).toMatchSnapshot();
    });
});