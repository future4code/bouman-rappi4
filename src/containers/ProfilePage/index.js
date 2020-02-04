import React from'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Title, Linha, Paragraph , EditContent, Adress, ParagraphDefaultAdress, ParagraphAdress, HistoricParagraph, HistoricLine, HistoricContainer, ContainerOrderCard, TitleOrder, DateOrderCard, SubtotalOrder, ParagraphOnly, EditData, EditAdress } from '../../style/profilePage';
import Edited from '../../imagens/ícones/edit.svg'

export const AppWrapper = styled.div`
width: 100%;
`

class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    
      };
    }
  
    render() {
     
      return (
        <AppWrapper>
            <Title>Meu Perfil</Title>
            <Linha/>

            <EditContent>
                <Paragraph >Bruna Oliveira</Paragraph>
                <Paragraph >bruna_o@gmail.com</Paragraph>
                <Paragraph >(11) 964395291</Paragraph>
                <EditData src={Edited} />
            </EditContent>

            <Adress>
                <ParagraphDefaultAdress> Endereço cadastrado </ParagraphDefaultAdress>
                <ParagraphAdress>Rua Alessandra Vieira, 42 - Santana</ParagraphAdress>
                <EditAdress src={Edited} />
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
        </AppWrapper>
      );
    }
  }
  
  
  const mapDispatchToProps = dispatch => ({

  })
  
  
  
  export default connect(null, mapDispatchToProps)(ProfilePage);
  
