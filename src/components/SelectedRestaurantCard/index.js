import React from 'react';
import { CardContainer, CardImg, RestaurantName, ShippingAndDeliveryContainer, RestaurantInfoContainer, StyledDiv, CategoryDiv } from './styled'

function SelectedRestaurantCard(props) {
    return (
        <CardContainer key={props.key} onClick={props.onClick}>
            <CardImg src={props.img} />
            <RestaurantName>{props.name}</RestaurantName>
            <RestaurantInfoContainer>
                <CategoryDiv>{props.category}</CategoryDiv>
                <ShippingAndDeliveryContainer>
                    <div>{props.deliveryTime} min </div>
                    <StyledDiv>Frete R${props.price},00</StyledDiv>
                </ShippingAndDeliveryContainer>
                <div>{props.address}</div>
            </RestaurantInfoContainer>
        </CardContainer>
    )
}

export default SelectedRestaurantCard;
