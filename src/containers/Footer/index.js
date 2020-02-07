import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import { StyledFooter } from './styled';
import { routes } from '../Router';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export class Footer extends Component {
    render() {

        const { goToFeedPage, goToCartPage, goToProfilePage } = this.props

        return (
            <StyledFooter>
                <BottomNavigationAction onClick={goToFeedPage} icon={<HomeOutlinedIcon fontSize="medium" />} />
                <BottomNavigationAction onClick={goToCartPage} icon={<ShoppingCartOutlinedIcon fontSize="medium" />} />
                <BottomNavigationAction onClick={goToProfilePage} icon={<PersonOutlineOutlinedIcon fontSize="medium" />} />
            </StyledFooter>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    goToFeedPage: () => dispatch(push(routes.feedPage)),
    goToCartPage: () => dispatch(push(routes.cartPage)),
    goToProfilePage: () => dispatch(push(routes.profilePage))
})

export default connect(null, mapDispatchToProps)(Footer);
