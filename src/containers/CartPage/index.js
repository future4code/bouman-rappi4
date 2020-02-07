import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { CardContainer, CardAdressSection, CardMain, ShippingContainer, StyledH4, SubTitle, TotalContainer, StyledButtonConfirm } from './styled';
import {FeedContainer, StyledMain} from '../../style/styled'
import {ParagraphDefaultAdress} from '../../style/profilePage'
import Footer from '../Footer';
import Header from '../../components/Header';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import CustomizedRadios from '../../components/PaymentMethod';
import { getProfile } from '../../action/profile';
import { placeOrder } from '../../action/order';
import { removeProductFromCart } from '../../action/restaurants';
import ProductCard from '../../components/ProductsCard'

export class CartPage extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }

    
    render() {
        const { goToFeedPage, cartProduct } = this.props
        const { address } = this.props.getToProfile

        console.log(this.props.cartProduct)
        const cartProductIsReady = cartProduct.length === 0 ? <p>Carrinho vazio</p> : (
            <Fragment>
                {cartProduct.map((product) => 
                    <ProductCard 
                        img={product.photoUrl} 
                        name={product.name} 
                        description={product.description} 
                        price={product.price} 
                        quantity={product.quantity}
                        onClickOpen={() => this.handleOpenAddWindow(product.id)}
                    />
                )}
            </Fragment>
        )
        return (
            <FeedContainer>
                <Header title="Meu Carrinho"/>
                <CardAdressSection>
                    <ParagraphDefaultAdress>Endereço de entrega</ParagraphDefaultAdress>
                    <p>{address}</p>
                </CardAdressSection>
                <StyledMain>
                    {cartProductIsReady}
                </StyledMain>
                <CardMain>
                    <p>Frete R$0,00</p>
                    <h3>SUBTOTAL</h3>
                    <p></p>
                    <h3>R$00,00</h3>
                </CardMain>
                <SubTitle>
                    <StyledH4>Forma de Pagamento</StyledH4>
                </SubTitle>
                <CustomizedRadios/>
                <StyledButtonConfirm onClick={goToFeedPage}>Confirmar</StyledButtonConfirm>
                <Footer/>
            </FeedContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    getToProfile: state.profileReducer.profile,
    cartProduct: state.restaurantsReducer.cartProducts
})

const mapDispatchToProps = dispatch => ({
    goToFeedPage: () => dispatch(push(routes.feedPage)),
    getProfile: () => dispatch(getProfile()),
    placeOrder: (id, quantity, paymentMethod) => dispatch(placeOrder(id, quantity, paymentMethod)),
    removeProductFromCart: (id) => dispatch(removeProductFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
