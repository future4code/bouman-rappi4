import styled from "styled-components";

export const CardContainer = styled.div `
    width: 90%;
    min-height: 200px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    border: 0.5px solid #bdbdbd;
    :hover {
        cursor: pointer;
    }
`

export const RestaurantName = styled.div `
    width: 100%;
    height: 10px;
    color: #E86E5A;
    padding: 10px;
    font-weight: bolder;
`

export const ShippingAndDeliveryContainer = styled.div `
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #bdbdbd;
    font-weight: bolder;
`

export const CardImg = styled.img `
    width: 100%;
    height: 20vh;
    border-radius: 5px;
`