import styled from 'styled-components'

export const ProductCardContainer = styled.div `
    width: 90%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 0.5px solid #bdbdbd;
`

export const ProductImage = styled.img `
    width: 40%;
    height: 100%;
`

export const ProductInfoContainer = styled.div `
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProductName = styled.h3 `
    width: 100%;
    height: 30%;
    display: flex;
    color: #E86E5A;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10px;
    margin: 3px;
`

export const ProductDescription = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
    margin: 3px;
`


export const ProductPrice = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 10px;
    margin: 3px;
`