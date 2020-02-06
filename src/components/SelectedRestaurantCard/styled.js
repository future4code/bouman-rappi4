import styled from "styled-components";

export const CardContainer = styled.div `
    width: 90%;
    min-height: 300px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
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
export const RestaurantInfoContainer = styled.div `
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: #bdbdbd;
    font-weight: bolder;
    margin-bottom: 8px;
`
export const ShippingAndDeliveryContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    color: #bdbdbd;
    font-weight: bolder;
    margin-bottom: 8px;
`

export const StyledDiv = styled.div `
    margin-left: 30px;
`

export const CategoryDiv = styled.div `
    margin-bottom: 8px;
    margin-top: 8px;
`

export const CardImg = styled.img `
    width: 100%;
    height: 20vh;
    border-radius: 5px;
    margin-Bottom: 5px;
`