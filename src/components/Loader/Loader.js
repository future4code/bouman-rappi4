import React from 'react';
import {LoaderContainer, StyledImg} from '../../style/styled';
import Logo from "../../imagens/logo-future-eats.svg";

function Loader () {
    return (
        <LoaderContainer>
            <StyledImg src={Logo} alt="deveria ter uma imagem"/>
        </LoaderContainer>
    )
}

export default Loader;