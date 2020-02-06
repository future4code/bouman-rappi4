import React from 'react';
import { ProductCardContainer, ProductImage, ProductInfoContainer, ProductName, ProductDescription, ProductPrice } from './styled'

function ProductCard(props) {
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
        </ProductCardContainer>
    )
}

export default ProductCard
