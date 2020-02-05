import React from'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Title, Linha, Paragraph , EditContent, Adress, ParagraphDefaultAdress, ParagraphAdress, HistoricParagraph, HistoricLine, HistoricContainer, ContainerOrderCard, TitleOrder, DateOrderCard, SubtotalOrder, ParagraphOnly, EditData, EditAdress } from '../../style/profilePage';
import Edited from "../../imagens/ícones/edit.svg"
import Footer from '../Footer';
import Header from '../../components/Header';
import { routes } from '../Router';
import { push } from 'connected-react-router'

export const AppWrapper = styled.div`
width: 100%;
height: 100%;
`

class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    
      };
    }
  
    render() {
      const { goToEditAddressPage, goToEditUserPage } = this.props
      return (
        <AppWrapper>
            <Header title="Meu Perfil"/>
            <EditContent>
                <Paragraph >Bruna Oliveira</Paragraph>
                <Paragraph >bruna_o@gmail.com</Paragraph>
                <Paragraph >(11) 964395291</Paragraph>
                <EditData src={Edited} onClick={goToEditUserPage}/>
            </EditContent>

            <Adress>
                <ParagraphDefaultAdress> Endereço cadastrado </ParagraphDefaultAdress>
                <ParagraphAdress>Rua Alessandra Vieira, 42 - Santana</ParagraphAdress>
                <EditAdress src={Edited} onClick={goToEditAddressPage}/>
            </Adress>
            <HistoricContainer>
                <HistoricParagraph>Histórico de pedidos</HistoricParagraph>
                <HistoricLine/>
                {/* <ParagraphOnly>Você não realizou nenhum pedido</ParagraphOnly> */}
            </HistoricContainer>

            <ContainerOrderCard>

                <TitleOrder>Bullguer Vila Madalena</TitleOrder>
                <DateOrderCard>23 de outubro de 2019</DateOrderCard>
                <SubtotalOrder>SUBTOTAL R$67,00</SubtotalOrder>
                
            </ContainerOrderCard>
            <Footer />
        </AppWrapper>
      );
    }
  }
  
  
  const mapDispatchToProps = dispatch => ({
    goToEditUserPage: () => dispatch(push(routes.editUserPage)),
    goToEditAddressPage: () => dispatch(push(routes.editAddressPage)),
  })
  
  
  
  export default connect(null, mapDispatchToProps)(ProfilePage);
  
