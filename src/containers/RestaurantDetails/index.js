import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { getRestaurantsDetails } from '../../action/restaurants';
import Footer from '../Footer';
import Loader from '../../components/Loader/Loader';
import { StyledMainProducts } from '../../style/styled';
import ProductCard from '../../components/ProductsCard'
import SelectedRestaurantCard from '../../components/SelectedRestaurantCard';
import Back from "../../imagens/ícones/back.png"

export class RestaurantDetails extends Component {

    componentDidMount () {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            this.props.goToLoginPage()
        } else if (this.props.selectedRestaurantId !== "") {
            this.props.getRestaurantDetail(this.props.selectedRestaurantId)
        } else {
            this.props.gotToFeedPage()
        }
    }

    render() {       

        const { selectedRestaurant, gotToFeedPage } = this.props

        const productsIsReady = !selectedRestaurant.products ? <Loader/> : (
            <Fragment>
                { selectedRestaurant.products.map((product) => 
                    <ProductCard 
                        img={product.photoUrl} 
                        name={product.name} 
                        description={product.description} 
                        price={product.price} 
                    />
                )}
            </Fragment>
        )   

        return (
            <StyledMainProducts>
                <Header title={selectedRestaurant.name} img={Back} onClick={gotToFeedPage}/>
                <SelectedRestaurantCard 
                    key={selectedRestaurant.id} 
                    img={selectedRestaurant.logoUrl} 
                    name={selectedRestaurant.name} 
                    price={selectedRestaurant.shipping}
                    deliveryTime={selectedRestaurant.deliveryTime}
                    address={selectedRestaurant.address}
                    category={selectedRestaurant.category}
                />
                {productsIsReady}
                <Footer/>
            </StyledMainProducts>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedRestaurantId: state.restaurantsReducer.selectedRestaurantId,
    selectedRestaurant: state.restaurantsReducer.selectedRestaurant
})

const mapDispatchToProps = (dispatch) => ({
    getRestaurantDetail: (restaurantId) => dispatch(getRestaurantsDetails(restaurantId)),
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    gotToFeedPage: () => dispatch(push(routes.feedPage))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails)
