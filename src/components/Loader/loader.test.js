import React from 'react'
import renderer from "react-test-renderer";
import  Loader  from './Loader';

describe ('teste componente Loader', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Loader></Loader>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})