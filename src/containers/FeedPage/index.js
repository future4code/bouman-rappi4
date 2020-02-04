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

import { getProducts } from '../../action/products'
import Header from '../../components/Header';


const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    position:absolute;
    top: 185px;
    height:auto;
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
    

componentDidMount() {
    this.props.getProducts()
}
   

    render() {
        return (
            <FeedContainer>
                <Header title="Rappi4"/>
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
                            {this.props.getToProducts.map((product) => (
                                <StyledCardContent>
                                    <StyledCardImage component="img" image={product.logoUrl} title="foto do prato" alt="foto do prato"/>
                                    <p>{product.name}</p>
                                    <StyledCardDetails>
                                        

                                        <p>{product.deliveryTime} min</p>
                                        <p>Frete: R${product.shipping},00</p>
                                    </StyledCardDetails>
                                </StyledCardContent>
                             ))}
                            </CardActionArea>
                        </Card>
                    </StyledCardContainer>
               
                
                <Footer/>
            </FeedContainer>
        )
    }
}

const mapStateToProps = state => ({
    getToProducts: state.products.allProducts
})

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (FeedPage);