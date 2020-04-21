import React from 'react'
import renderer from "react-test-renderer";
import { ProductCard } from './index';

describe ('teste componente ProductCard', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<ProductCard></ProductCard>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})