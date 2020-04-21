import React from 'react'
import renderer from "react-test-renderer";
import  PaymentMethod  from './index';

describe ('teste componente PaymentMethod', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<PaymentMethod></PaymentMethod>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})