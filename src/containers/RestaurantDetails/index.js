import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { getRestaurantsDetails, addProductToCart } from '../../action/restaurants';
import Footer from '../Footer';
import Loader from '../../components/Loader/Loader';
import { StyledMainProducts } from '../../style/styled';
import ProductCard from '../../components/ProductsCard'
import SelectedRestaurantCard from '../../components/SelectedRestaurantCard';
import Back from "../../imagens/ícones/back.png"
import { placeOrder } from '../../action/order';
import { Dialog } from '@material-ui/core';

export class RestaurantDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addCartWindow: false,
            selectedProductId: "",
            quantity: 0,
            productDetails: {}
        }
    }

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            this.props.goToLoginPage()
        } else if (this.props.selectedRestaurantId !== "") {
            this.props.getRestaurantDetail(this.props.selectedRestaurantId)
        } else {
            this.props.gotToFeedPage()
        }
    }

    handleOpenAddWindow = (productId) => {
        this.setState({ addCartWindow: true, selectedProductId: productId })
    }

    handleCloseAddWindow = () => {
        this.setState({ addCartWindow: false, selectedProductId: "" })
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleAddCartProducts = () => {
        const { selectedProductId, quantity } = this.state
        const selectedProduct = this.props.selectedRestaurant.products.find((product) => {
            return product.id === selectedProductId
        })

        const { name, description, price, photoUrl } = selectedProduct
        this.props.addProductToCart(selectedProductId, quantity, name, price, description, photoUrl)
        this.handleCloseAddWindow()
    }

    render() {

        const { selectedRestaurant, gotToFeedPage } = this.props

        const productsIsReady = !selectedRestaurant.products ? <Loader /> : (
            <Fragment>
                {selectedRestaurant.products.map((product) =>
                    <ProductCard
                        img={product.photoUrl}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        onClickOpen={() => this.handleOpenAddWindow(product.id)}
                    />
                )}
            </Fragment>
        )

        return (
            <StyledMainProducts>
                <Header title={selectedRestaurant.name} img={Back} onClick={gotToFeedPage} />
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
                <Footer />

                <Dialog open={this.state.addCartWindow} onClose={this.handleCloseAddWindow}>
                    <p>Selecione a quantidade desejada</p>
                    <select name="quantity" size="3" onChange={this.handleOnChange}>
                        <option value={1} selected="selected">1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                    <button onClick={this.handleAddCartProducts}>Adicionar ao Carrinho</button>
                </Dialog>
            </StyledMainProducts>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedRestaurantId: state.restaurantsReducer.selectedRestaurantId,
    selectedRestaurant: state.restaurantsReducer.selectedRestaurant,
    cartProducts: state.restaurantsReducer.cartProducts,
})

const mapDispatchToProps = (dispatch) => ({
    getRestaurantDetail: (restaurantId) => dispatch(getRestaurantsDetails(restaurantId)),
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    gotToFeedPage: () => dispatch(push(routes.feedPage)),
    placeOrder: (id, quantity, paymentMethod) => dispatch(placeOrder(id, quantity, paymentMethod)),
    addProductToCart: (id, quantity, name, price, description, photoUrl) => dispatch(addProductToCart(id, quantity, name, price, description, photoUrl)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails)
