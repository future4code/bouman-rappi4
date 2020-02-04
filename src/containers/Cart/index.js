import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { CardContainer, CardContainerHeader, CardAdressSection } from './styled';
import { StyledButtonForms } from "../../style/styled";
import Footer from '../Footer';
import { push } from 'connected-react-router';
import { routes } from '../Router'

export class CartPage extends Component {
    render() {
        const { goToFeedPage } = this.props
        return (
            <CardContainer>
                <CardContainerHeader>
                    <p>Meu Carrinho</p>
                </CardContainerHeader>
                <CardAdressSection>

                </CardAdressSection>
                <StyledButtonForms onClick={goToFeedPage}>Entrar</StyledButtonForms>
                <Footer/>
            </CardContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    goToFeedPage: () => dispatch(push(routes.feedPage))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
