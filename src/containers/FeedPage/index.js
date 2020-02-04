import React from 'react';
import { connect } from 'react-redux';
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
import { getProducts } from '../../action/products';
import Header from '../../components/Header';
const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledSubHeader= styled.div`
    position: fixed;
    top: 50px;
    z-index: 2;
`
const StyledTextField = styled(TextField)`
    background: white;
    text-align: center;
    width: 450px;
    z-index: 2;
`
const StyledSearchIcon = styled(SearchOutlinedIcon)`
    opacity: 30%;
`
const StyledAppBar = styled(AppBar)`
    background: white;
    box-shadow: none;
    color: black;
    z-index: 1;
    padding-top: 120px;
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
    z-index: -2;
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
                <Header title="Rappi4" />               
                <StyledSubHeader>
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
                                {this.props.getToProducts && this.props.getToProducts.map((product) => (
                                    <StyledTabText label={product.category} />
                                ))}
                            </Tabs>
                        </StyledAppBar>                   
                </StyledSubHeader> 
                <StyledCardContainer>
                    <Card>
                        <CardActionArea>
                            {this.props.getToProducts && this.props.getToProducts.map((product) => (
                                <StyledCardContent>
                                    <StyledCardImage component="img" image={product.logoUrl} title="foto do prato" alt="foto do prato" />
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
                <Footer />
            </FeedContainer>
        )
    }
}
const mapStateToProps = state => ({
    getToProducts: state.products.allRestaurants
})
const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
})
export default connect(mapStateToProps,mapDispatchToProps)(FeedPage);



