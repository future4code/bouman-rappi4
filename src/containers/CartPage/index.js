import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardContainer, CardAdressSection, CardMain } from './styled';
import { StyledButtonForms } from "../../style/styled";
import Footer from '../Footer';
import Header from '../../components/Header';

export class CartPage extends Component {
    render() {
        const { goToFeedPage } = this.props
        return (
            <CardContainer>
                <Header title="Meu Carrinho"/>
                <CardAdressSection>

                </CardAdressSection>
                <CardMain>
                    <p>Carrinho Vazio</p>
                </CardMain>
                <StyledButtonForms onClick={goToFeedPage}>Entrar</StyledButtonForms>
                <Footer/>
            </CardContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
