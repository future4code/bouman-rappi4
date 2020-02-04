import React from 'react'
import renderer from "react-test-renderer";
import {LoginPage} from './index';

describe ('teste componente login', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<LoginPage></LoginPage>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})