import React from 'react';
import { StyledImg, StyledHeader } from './styled'

function Header(props) {
    return (
    <StyledHeader>
        <StyledImg src={props.img} onClick={props.onClick}/>
        <p>{props.title}</p>
    </StyledHeader>
    )
}

export default Header;
