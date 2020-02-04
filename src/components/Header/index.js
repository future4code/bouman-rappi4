import React from 'react';
import { StyledHeader } from '../../style/styled'

function Header(props) {
    return (
    <StyledHeader>
        <p>{props.title}</p>
    </StyledHeader>
    )
}

export default Header;
