import styled from 'styled-components'

export const ProductCardContainer = styled.div `
    width: 90%;
    height: 130px;
    display: flex;
    font-family: Roboto;
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

// teste

export const StyledCardContainer = styled.div`
    height: 112.6px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
    position: relative;
    margin-bottom:8px;
`

export const StyledImgWrapper = styled.div`
    max-height: 100%;
    max-width: 29.573170731707314%;
`

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
    background-color: #d8d8d8;
`

export const StyledCardContent = styled.div`
    padding: 16px;
`

export const StyledTitleSpan = styled.span`
    display: block;
    color: #e86e5a;
    font-size: 16px;
    margin-bottom: 6px;
`
export const StyledContentSpan = styled.span`
    display: block;
    font-size: 14px;
    color: #b8b8b8;
    margin-bottom: 6px;
`
export const StyledPriceSpan = styled.span`
    display: block;
    font-size: 16px;
`
export const StyledAddButton = styled.button`
    position: relative;
    top: 105px;
    right: 5px;
    width: 90px;
    height: 20px;
    border-radius: 0 5px 5px 0;
    background: white;
    color: black;
    font-size: 12px;
    text-decoration: none;
    cursor: pointer;
`

export const StyledSpan = styled.span `
    position: relative;
    top: 5px;
    right: 5px;
`



export const StyledRemoveButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 31px;
    border: 1px solid #e86e5a;
    border-radius: 8px 0 8px 0;
    background: white;
    color: #e86e5a;
    font-size: 12px;
    white-space: nowrap;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
`

export const StyledCounter = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    width: 33px;
    height: 33px;
    border: 1px solid #e86e5a;
    border-radius: 0 8px 0 8px;
    background: white;
    color: #e86e5a;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`