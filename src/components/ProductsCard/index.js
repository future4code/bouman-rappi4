import React from 'react';
import { ProductCardContainer, ProductImage, ProductInfoContainer, ProductName, ProductDescription, ProductPrice, StyledAddButton, StyledSpan } from './styled'
import { Dialog } from '@material-ui/core';

function ProductCard (props) {
    return (
        <ProductCardContainer>
            <ProductImage alt="image" src={props.img}/>
            <ProductInfoContainer>
                <ProductName>
                    {props.name}
                </ProductName>
                <ProductDescription>
                    {props.description}
                </ProductDescription>
                <ProductPrice>
                    R$ {props.price}
                </ProductPrice>  
            </ProductInfoContainer>
            <StyledAddButton onClick={props.onClickOpen}> 
                Adicionar         
            </StyledAddButton>
            <StyledSpan>
                {props.quantity}
            </StyledSpan>
        </ProductCardContainer>  
    )
}
 
 export default(ProductCard);


