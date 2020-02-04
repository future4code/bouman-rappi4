import React from 'react';
import { connect } from 'react-redux';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { TextField, InputAdornment, Input } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import styled from 'styled-components';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


  

  


const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

const StyledHeader = styled.header`
    text-align: center;
`

const StyledTextField = styled(TextField)`
    width: 328px;
    height: 56px;
`

const StyledSearchIcon = styled(SearchOutlinedIcon)`
    opacity: 30%;
`

const StyledFooter = styled(BottomNavigation)`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 49px;
    padding-bottom: 50px;
`

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


   

    render() {
        const { goToFeedPage } = this.props;
        return (
            <FeedContainer>
                <StyledHeader>
                    <h3>Rappi4</h3>                    
                </StyledHeader>
                <StyledTextField type="search" placeholder="Restaurante" variant="outlined" 
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <StyledSearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                
                <div>
                    
                    {/* // testando barra do filtro, mas ainda não faz scrollagem //*/}
                    <AppBar position="static" color="default">
                        <Tabs
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Burger" />
                            <Tab label="Asiáticas" />
                            <Tab label="Massas"/>
                            <Tab label="Saudáveis" />
                            <Tab label="Sobremesa"/>
                        </Tabs>
                    </AppBar>
                </div>

                <div>
                    feed
                </div>

                <StyledFooter>
                    <BottomNavigationAction onClick={goToFeedPage} icon={<HomeOutlinedIcon fontSize="large"/>} />
                    <BottomNavigationAction icon={<ShoppingCartOutlinedIcon fontSize="large"/>} />
                    <BottomNavigationAction icon={<PersonOutlineOutlinedIcon fontSize="large"/>} />
                </StyledFooter>
            </FeedContainer>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    goToFeedPage: () => dispatch(push(routes.feedPage)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (FeedPage);