import React from 'react'
import renderer from "react-test-renderer";
import Header from './index';

describe ('teste componente Header', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Header></Header>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})