import React from 'react'
import renderer from "react-test-renderer";
import SelectedRestaurantCard from './index';

describe ('teste componente SelectedRestaurantCard', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<SelectedRestaurantCard></SelectedRestaurantCard>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})