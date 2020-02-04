import styled from 'styled-components';
import Button from "@material-ui/core/Button";

export const CardContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const CardAdressSection = styled.section `
    width: 100%;
    min-height: 100px;
    background-color: #e0e0e0;
    border-bottom: 1px solid #aeaeae;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    padding: 10px;
    position: fixed;
    top: 30px;
`

export const CardMain = styled.main`
    width: 100%;
    min-height: 230px;
    position: relative;
    top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ShippingContainer = styled.div `
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    align-items: center;
`

export const TotalContainer = styled.div `
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

export const StyledButtonConfirm = styled(Button) `
    cursor: pointer;
    width: 90%;
    background-color: #E86E5A; 
    position: absolute;
    bottom: 70px;
    :hover {
        border: 1px solid white;
        background-color: #E86E5A;
    }
`

export const StyledH4 = styled.h4 `
    margin: 5px;
`

export const SubTitle = styled.div `
    width: 95%;
    border-bottom: 0.5px solid gray;
`

export const PaymentMethodContainer = styled.div `
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
`
