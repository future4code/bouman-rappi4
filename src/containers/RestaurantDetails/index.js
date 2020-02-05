import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { getRestaurantsDetails } from '../../action/products';
import Footer from '../Footer';
import Loader from '../../components/Loader/Loader';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { StyledCardContent, StyledCardImage, StyledCardDetails } from '../../style/styled'

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

        const { selectedRestaurant } = this.props

        const productsIsReady = !selectedRestaurant.products ? <Loader/> : (
            <Fragment>
                { selectedRestaurant.products.map((product) => 
                    <Fragment>
                        <Card>
                            <CardActionArea>
                            <StyledCardImage component="img" image={product.photoUrl} title="foto do prato" alt="foto do prato" />
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>R${product.price}</p>
                            </CardActionArea>
                        </Card>
                    </Fragment>
                )}
            </Fragment>
        )

        return (
            <div>
                <Header title={selectedRestaurant.name}/>
                <Card>
                    <CardActionArea>
                        <StyledCardContent key={selectedRestaurant.id}>
                            <StyledCardImage onClick={() => this.handleSetRestaurantId(selectedRestaurant.id)} component="img" image={selectedRestaurant.logoUrl} title="foto do prato" alt="foto do prato" />
                            <p>{selectedRestaurant.name}</p>
                            <StyledCardDetails>
                                <p>{selectedRestaurant.deliveryTime} min</p>
                                <p>Frete: R${selectedRestaurant.shipping},00</p>
                                <p>{selectedRestaurant.address}</p>
                            </StyledCardDetails>
                        </StyledCardContent>
                    </CardActionArea>
                </Card>
                {productsIsReady}
                <Footer/>
            </div>
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
