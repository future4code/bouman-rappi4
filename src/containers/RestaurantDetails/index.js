import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { routes } from '../Router';
import { push } from 'connected-react-router';
import { getRestaurantsDetails } from '../../action/products';
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


        // let filteredProductsAcompanhamento = selectedRestaurant.products.filter((product) => {
        //     return product.category === "acompanhamento"
        // })

        // let filteredProductsSobremesa = selectedRestaurant.products.filter((product) => {
        //     return product.category === "Sobremesa"
        // })

        // let filteredProductsBebida = selectedRestaurant.products.filter((product) => {
        //     return product.category === "Bebida"
        // })

        // let filteredProductsLanche = selectedRestaurant.products.filter((product) => {
        //     return product.category === "Lanche"
        // })

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

        let orderedCategory;

        // if(selectedRestaurant.products){
        //     orderedCategory = selectedRestaurant.products.sort((a,b) => {
        //         if(a.category < b.category){
        //             return 1;
        //         } else {
        //             return -1;
        //         }
        //     });
        // }
        // const categoryIsReady = !selectedRestaurant.products ? <Loader/> : (
        //     <Fragment>
        //         {orderedCategory.map((section) =>
        //             <div>
        //                 {section.category}
        //             </div>
        //         )}
        //     </Fragment>
        // )

        return (
            <StyledMainProducts>
                <Header title={selectedRestaurant.name} img={Back} onClick={gotToFeedPage}/>
                {/* {categoryIsReady} */}
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
