import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardContainer, CardAdressSection, CardMain, ShippingContainer, StyledH4, SubTitle, TotalContainer, StyledButtonConfirm } from './styled';
import Footer from '../Footer';
import Header from '../../components/Header';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import CustomizedRadios from '../../components/PaymentMethod';
import { getProfile } from '../../action/profile';

export class CartPage extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }
    render() {
        const { goToFeedPage } = this.props
        const { address } = this.props.getToProfile
        return (
            <CardContainer>
                <Header title="Meu Carrinho"/>
                <CardAdressSection>
                    <p>Endereço de entrega</p>
                    <p>{address}</p>
                </CardAdressSection>
                <CardMain>
                    <p>Carrinho Vazio</p>
                </CardMain>
                <ShippingContainer>
                    <p>Frete R$0,00</p>
                </ShippingContainer>
                <TotalContainer>
                    <h3>SUBTOTAL</h3>
                    <p></p>
                    <h3>R$00,00</h3>
                </TotalContainer>
                <SubTitle>
                    <StyledH4>Forma de Pagamento</StyledH4>
                </SubTitle>
                <CustomizedRadios/>
                <StyledButtonConfirm onClick={goToFeedPage}>Confirmar</StyledButtonConfirm>
                <Footer/>
            </CardContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    getToProfile: state.profileReducer.profile
})

const mapDispatchToProps = dispatch => ({
    goToFeedPage: () => dispatch(push(routes.feedPage)),
    getProfile: () => dispatch(getProfile()),

})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
