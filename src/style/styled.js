import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Tab from '@material-ui/core/Tab';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AppBar from '@material-ui/core/AppBar';


export const StyledCard = styled(Card) `
    margin: 20px;
    padding: 0;
    width: 90%;
    min-height: 300px;
`

// header
export const StyledHeader = styled.header `
    width: 100%;
    height: 40px;
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    background: white;
    z-index: 3;

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

// seila 


export const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StyledSubHeader= styled.div`
    position: fixed;
    top: 50px;
    z-index: 2;
`
export const StyledTextField = styled(TextField)`
    background: white;
    text-align: center;
    width: 450px;
    z-index: 2;
`
export const StyledSearchIcon = styled(SearchOutlinedIcon)`
    opacity: 30%;
`
export const StyledAppBar = styled(AppBar)`
    background: white;
    box-shadow: none;
    color: black;
    z-index: 1;
    padding-top: 120px;
`
export const StyledTabText = styled(Tab)`
    color: black;
    font-weight: bold;
    font-size: 8pt;
`
export const StyledCardContainer = styled.div`
    position:absolute;
    top: 185px;
    height:auto;
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
