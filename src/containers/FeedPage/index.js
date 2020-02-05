import React from 'react';
import { connect } from 'react-redux';
import { InputAdornment } from '@material-ui/core';
import { push } from 'connected-react-router'
import Tabs from '@material-ui/core/Tabs';
import Header from '../../components/Header';
import Footer from '../Footer';
import { getRestaurants, setRestaurantIdAction } from '../../action/products';
import { FeedContainer, StyledSubHeader, StyledTextField, StyledMain, StyledSearchIcon, StyledAppBar, StyledTabText, StyledCardContainer } from '../../style/styled'
import { routes } from '../Router';
import RestaurantCard from '../../components/RestaurantCard'

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
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

    handleInputOnChange = event => {
        const { name, value } = event.target;

        this.setState ({ form: { ...this.state.form, [name]: value }});
    };


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
                                <Tabs variant="scrollable">
                                    {fetchRestaurants && fetchRestaurants.map((restaurant) => (
                                        <StyledTabText label={restaurant.category} />
                                    ))}
                                </Tabs>
                            </StyledAppBar>                   
                    </StyledSubHeader> 
                <StyledMain>         
                        {fetchRestaurants && fetchRestaurants.map((restaurant) => (
                            <RestaurantCard 
                                onClick={() => this.handleSetRestaurantId(restaurant.id)}
                                key={restaurant.id} 
                                name={restaurant.name} 
                                img={restaurant.logoUrl} 
                                price={restaurant.shipping} 
                                deliveryTime={restaurant.deliveryTime}
                            />       
                        ))}
                </StyledMain>   
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




