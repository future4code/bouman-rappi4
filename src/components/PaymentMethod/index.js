import React from 'react';
import {Container, StyledForm} from './styled'

function PaymentMethod(props) {
    return (
        <Container>
            <StyledForm>
                <span>Débito<input name="débito" onClick={props.onClick} value="Débito" type="radio"/></span>    
                <span>Crédito<input name="cartão de crédito" onClick={props.onClick} value="Crédito" type="radio"/></span> 
            </StyledForm>
        </Container>
    )
}

export default PaymentMethod;