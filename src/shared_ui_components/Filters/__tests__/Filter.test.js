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
        const tree = renderer.create(<Filters filterBy='ard' searchByName='ro' itemsPerPage={50} />);
        
        expect(tree.root.findByProps({name: 'filterBy'}).props.value).toBe('ard');
        expect(tree.root.findByProps({name: 'searchByName'}).props.value).toBe('ro');
        expect(tree.root.findByProps({name: 'per_page'}).props.value).toBe(50);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    
    it('should onChange and OnSelect', async () => {
        const tree = renderer.create(<Filters filterBy='AU' onChange={onChange} searchByName='ro' itemsPerPage={100} onSelect={onSelect} />);
        
        const input = tree.root.findByProps({name: 'filterBy'});
        const input2 = tree.root.findByProps({name: 'searchByName'});
        const select = tree.root.findByProps({name: 'per_page'});
        
        const mEvent = { target: { value: 'AU' } };
        const mEvent2 = { target: { value: 'ro' } };
        const sEvent = { target: { value: 100 } };
        
        act(() => {
            input.props.onChange(mEvent);
            input2.props.onChange(mEvent2);
            select.props.onChange(sEvent);
        });
        
        expect(onChange).toHaveBeenCalledWith(mEvent);
        expect(onChange).toHaveBeenCalledWith(mEvent2);
        expect(onSelect).toHaveBeenCalledWith(sEvent);
        
        expect(input2.props.value).toBe('ro');
        expect(input.props.value).toEqual('AU');
        expect(select.props.value).toEqual(100);

        expect(tree.toJSON()).toMatchSnapshot();
    });
});