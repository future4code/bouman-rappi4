import React from 'react'
import renderer from "react-test-renderer";
import ProfilePage from './index';

describe ('teste componente ProfilePage', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<ProfilePage></ProfilePage>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})