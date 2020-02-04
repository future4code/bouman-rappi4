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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Footer from '../Footer';

const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledHeader = styled.header`
    text-align: center;
    border-bottom: 1px solid lightgray;
    width: 100%;
`

const StyledTextField = styled(TextField)`
    width: 80%;
    height: 56px;
    position: fixed;
    top: 70px;
`

const StyledSearchIcon = styled(SearchOutlinedIcon)`
    opacity: 30%;
`

const StyledFooter = styled(BottomNavigation)`
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid lightgray;
`

const StyledAppBar = styled(AppBar)`
    background: none;
    position: fixed;
    top: 130px;
    box-shadow: none;
    color: black;
`

const StyledTabText = styled(Tab)`
    color: black;
    font-weight: bold;
    font-size: 8pt;
`

const StyledCardContainer = styled.div`
    position: fixed;
    top: 185px;
`

const StyledCardContent = styled(CardContent)`
    width: 400px;
    height: auto;
    border-radius: 8px;
    border: solid 1px #b8b8b8;   
`

const StyledCardImage = styled(CardMedia)`
    max-width: 100%;
    max-height: auto;
    object-fit: contain;
`

const StyledCardDetails = styled.p`
    justify-content: space-between;
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
                    <StyledAppBar>
                        <Tabs
                            variant="scrollable"
                            scrollButtons="on"
                        >
                            <StyledTabText label="Burger"/>
                            <StyledTabText label="Asiáticas"/>
                            <StyledTabText label="Massas"/>
                            <StyledTabText label="Saudáveis"/>
                            <StyledTabText label="Sobremesa"/>
                            <StyledTabText label="Salgados"/>
                        </Tabs>
                    </StyledAppBar>

                <StyledCardContainer>
                    <Card>
                        <CardActionArea>
                            
                            <StyledCardContent>
                                <StyledCardImage component="img" image="https://picsum.photos/328/120" title="foto do prato" alt="foto do prato"/>
                                <p>Nome do produto</p>
                                <StyledCardDetails>
                                    <p>40-60 min</p>
                                    <p>Frete: R$5,00</p>
                                </StyledCardDetails>
                            </StyledCardContent>
                        </CardActionArea>
                    </Card>
                </StyledCardContainer>
                <Footer/>
            </FeedContainer>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (FeedPage);