import React from 'react';
import { connect } from 'react-redux';
import { InputAdornment } from '@material-ui/core';
import { push } from 'connected-react-router'
import Tabs from '@material-ui/core/Tabs';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Footer from '../Footer';
import { getRestaurants, setRestaurantIdAction } from '../../action/restaurants';
import Header from '../../components/Header';
import { FeedContainer, StyledCard, StyledSubHeader, StyledTextField, StyledSearchIcon, StyledAppBar, StyledTabText, StyledCardContainer, StyledCardContent, StyledCardImage, StyledCardDetails } from '../../style/styled'
import { routes } from '../Router';

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if(token === null){
          this.props.goToLoginPage()
        } else {
            this.props.getRestaurants()
        };
    }

    handleSetRestaurantId = (restaurantId) => {
        this.props.setRestaurantsDetail(restaurantId)
        this.props.goToRestaurantDetails()
        console.log(restaurantId)
    }
    render() {

        const { fetchRestaurants } = this.props

        console.log(fetchRestaurants)
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
                                {fetchRestaurants && fetchRestaurants.map((restaurant) => (
                                    <StyledTabText label={restaurant.category} />
                                ))}
                            </Tabs>
                        </StyledAppBar>                   
                </StyledSubHeader> 
                <StyledCardContainer>
                            {fetchRestaurants && fetchRestaurants.map((restaurant) => (
                                <StyledCard>
                                    <StyledCardContent key={restaurant.id}>
                                        <StyledCardImage onClick={() => this.handleSetRestaurantId(restaurant.id)} component="img" image={restaurant.logoUrl} title="foto do prato" alt="foto do prato" />
                                        <p>{restaurant.name}</p>
                                        <StyledCardDetails>
                                            <p>{restaurant.deliveryTime} min</p>
                                            <p>Frete: R${restaurant.shipping},00</p>
                                        </StyledCardDetails>
                                    </StyledCardContent>
                                </StyledCard>        
                            ))}
                </StyledCardContainer>
                <Footer />
            </FeedContainer>
        )
    }
}
const mapStateToProps = state => ({
    fetchRestaurants: state.restaurantsReducer.allRestaurants
})
const mapDispatchToProps = dispatch => ({
    getRestaurants: () => dispatch(getRestaurants()),
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    goToRestaurantDetails: () => dispatch(push(routes.restaurantDetails)),
    setRestaurantsDetail: (restaurantId) => dispatch(setRestaurantIdAction(restaurantId))
})

export default connect(mapStateToProps,mapDispatchToProps)(FeedPage);




