import React from 'react'
import renderer from "react-test-renderer";
import  RestaurantCard  from './index';

describe ('teste componente RestaurantCard', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<RestaurantCard></RestaurantCard>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})