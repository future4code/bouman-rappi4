import React from 'react';
import { CardContainer, CardImg, RestaurantName, ShippingAndDeliveryContainer } from './styled'

function RestaurantCard(props) {
    return (
        <CardContainer key={props.key} onClick={props.onClick}>
            <CardImg src={props.img}/>
            <RestaurantName>{props.name}</RestaurantName>
            <ShippingAndDeliveryContainer>
                <div>{props.deliveryTime} min </div>
                <div>Frete: R${props.price},00</div>
            </ShippingAndDeliveryContainer> 
        </CardContainer>
    )
}

export default RestaurantCard;
