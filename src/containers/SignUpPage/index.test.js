import React from 'react'
import renderer from "react-test-renderer";
import {SignUpPage} from './index';

describe ('teste componente Loader', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<SignUpPage></SignUpPage>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})