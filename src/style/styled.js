import styled, { keyframes } from 'styled-components';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// header
export const StyledHeader = styled.header `

`

// Loader

export const LoaderContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    background-color: #E86E5A;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledImg = styled.img `
    width: auto;
    height: auto;
    color: white;
`

// containers

export const StyledHeaderForms = styled.header `
    width: 100%;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: absolute;
    top: 0px;
`

export const StyledTextField = styled(TextField)`
    width: 90%;
`

export const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

export const StyledButtonForms = styled(Button) `
    cursor: pointer;
    width: 90%;
    background-color: #E86E5A; 
    :hover {
        border: 1px solid white;
        background-color: #E86E5A;
    }
`

export const StyledImgForms = styled.img `
    width: auto;
    height: auto;
    color: white;
`

export const HeaderSignUpPage = styled.div `
    width: 100%;
    height: 30px;
    border-bottom: 1px solid gray;
`

export const BackButton = styled.img `
    width: auto;
    height: auto;
`
