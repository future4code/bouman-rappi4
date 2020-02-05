import React from 'react';
import { StyledHeader } from '../../style/styled';
import Back from '../../imagens/ícones/back.png';
import { StyledImg } from './styled'

function Header(props) {
    return (
    <StyledHeader>
        <StyledImg src={props.img} onClick={props.onClick}/>
        <p>{props.title}</p>
    </StyledHeader>
    )
}

export default Header;
