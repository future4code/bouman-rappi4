import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Tab from '@material-ui/core/Tab';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AppBar from '@material-ui/core/AppBar';


export const StyledCard = styled(Card) `
    margin: 20px;
    padding: 0;
    width: 90%;
    min-height: 300px;
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
`

// containers

export const StyledMainProducts = styled.main `
    width: 100%;
    min-height: 1900px;
    display: flex;
    position: relative;
    top: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
`

export const StyledMain = styled.main `
    width: 100%;
    min-height: 2500px;
    display: flex;
    position: relative;
    top: 180px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
`
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

export const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  background-color: #ffffff;
`;

export const SignUpButton = styled.button `
    width: auto;
    height: auto;
    border: none;
    outline: none;
    background-color: #ffffff;
    font-size: 15px;
`

export const StyledButtonForms = styled(Button) `
    cursor: pointer;
    width: 90%;
    background-color: #E86E5A; 
    :hover {
        border: 1px solid #ffffff;
        background-color: #E86E5A;
    }
`

export const StyledImgForms = styled.img `
    width: auto;
    height: auto;
    color: #ffffff;
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

// Estilizações gerais 

export const StyledSearchMain = styled.main `
    width: 100%;
    min-height: 100vh;
    display: flex;
    position: fixed;
    top: 110px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
`

export const FormWrapper = styled.form`
    width: 100%;
    height: auto;
    gap: 10px;
    place-content: center;
    justify-items: center;
    display: grid;
    color: white;
`;

export const FeedContainer = styled.main`
    min-height: 100vh;
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
`

export const StyledSubHeader= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50px;
    z-index: 2;
    background-color: #ffffff;
`
export const StyledTextField = styled(TextField)`
    background-color: #ffffff;
    text-align: center;
    width: 320px;
    z-index: 2;
    border-radius: 2px;
`

export const StyledSearchIcon = styled(SearchOutlinedIcon)`
    opacity: 30%;
`
export const StyledAppBar = styled(AppBar)`
    background-color: #ffffff;
    box-shadow: none;
    color: black;
    z-index: 1;
    padding-top: 120px;
`
export const StyledTabText = styled(Tab)`
    color: black;
    font-weight: bold;
    font-size: 9pt;
`
export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:absolute;
    background-color: #ffffff;;
    top: 185px;
    z-index: -2;
`
export const StyledCardContent = styled(CardContent)`
    width: 400px;
    height: auto;
    border-radius: 8px;
    border: solid 1px #b8b8b8;   
`
export const StyledCardImage = styled(CardMedia)`
    max-width: 100%;
    max-height: auto;
    object-fit: contain;
`
export const StyledCardDetails = styled.p`
    justify-content: space-between;
`
