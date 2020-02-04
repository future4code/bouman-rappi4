import React from'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Title, Linha, Paragrafo, EditContent  } from '../../style/profilePage';


export const AppWrapper = styled.div`
width: 375px;
heigth: 812;
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
            <Paragrafo>Bruna Oliveira</Paragrafo>
            <Paragrafo>bruna_o@gmail.com</Paragrafo>
            <Paragrafo>(11) 964395291</Paragrafo>
            </EditContent>
        </AppWrapper>
      );
    }
  }
  
  
  const mapDispatchToProps = dispatch => ({

  })
  
  
  
  export default connect(null, mapDispatchToProps)(ProfilePage);
  