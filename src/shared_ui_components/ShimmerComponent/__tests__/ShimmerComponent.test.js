import React from 'react';
import { ShimmerComponent } from '../ShimmerComponent';
import renderer from 'react-test-renderer';


describe('ShimmerComponent tests', () => {
    it('should render with empty props', () => {
        const tree = renderer.create(<ShimmerComponent />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should render 15 tiles', () => {
        const tree = renderer.create(<ShimmerComponent numberItems={15} />);

        expect(tree.root.findAllByProps({className: 'lines shine'}).length).toEqual(15);
        expect(tree.toJSON()).toMatchSnapshot();
    });
})