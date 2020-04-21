import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Paragraph, EditContent, Adress, ParagraphDefaultAdress, ParagraphAdress, HistoricParagraph, HistoricLine, HistoricContainer, ContainerOrderCard, TitleOrder, DateOrderCard, SubtotalOrder, ParagraphOnly, EditData, EditAdress } from '../../style/profilePage';
import Edited from "../../imagens/ícones/edit.svg"
import Footer from '../Footer';
import Header from '../../components/Header';
import { routes } from '../Router';
import { push } from 'connected-react-router'
import { getProfile } from '../../action/profile'

export const AppWrapper = styled.div`
width: 100%;
height: 100%;
`

class ProfilePage extends React.Component {

  componentDidMount() {
    this.props.getProfile()
  }

  render() {
    const { goToEditAddressPage, goToEditDataUserPage } = this.props
    const { name, email, cpf, address } = this.props.getToProfile

    return (
      <AppWrapper>
        <Header title="Meu Perfil" />
        <div>
          <EditContent>
            <Paragraph></Paragraph>
            <Paragraph> {name}</Paragraph>
            <Paragraph> {email}</Paragraph>
            <Paragraph >{cpf}</Paragraph>
            <EditData src={Edited} onClick={goToEditDataUserPage} />
          </EditContent>
          <Adress>
            <ParagraphDefaultAdress> Endereço cadastrado </ParagraphDefaultAdress>
            <ParagraphAdress>{address}</ParagraphAdress>
            <EditAdress src={Edited} onClick={goToEditAddressPage} />
          </Adress>
        </div>
        <HistoricContainer>
          <HistoricParagraph>Histórico de pedidos</HistoricParagraph>
          <HistoricLine />
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

const mapStateToProps = state => ({
  getToProfile: state.profileReducer.profile
})

const mapDispatchToProps = dispatch => ({
  goToEditDataUserPage: () => dispatch(push(routes.editDataUserPage)),
  goToEditAddressPage: () => dispatch(push(routes.editAddressPage)),
  getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);