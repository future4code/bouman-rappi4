import React from 'react';
import { connect } from 'react-redux';
import { TextField, InputAdornment, Input } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import styled from 'styled-components';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Footer from '../Footer';
import { getProducts } from '../../action/products';
import Header from '../../components/Header';

const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledDiv = styled.div`
   position: fixed;
   background: white;
   padding: 50px;
   z-index: -1;
   width: 100%;
   color: transparent;
`

const StyledSubHeader = styled.div`
    position: fixed;
    top: 50px;
`

const StyledTextField = styled(TextField)`
    text-align: center;
    width: 450px;
`

const StyledSearchIcon = styled(SearchOutlinedIcon)`
    opacity: 30%;
`

class SearchPage extends React.Component {

   componentDidMount() {
      this.props.getProducts()
   }

   render() {
      return (
         <FeedContainer>
            <Header title="Rappi4" />
            <StyledDiv>
               COLOR
            </StyledDiv>
            <StyledSubHeader>
               <StyledTextField type="search" placeholder="Restaurante" variant="outlined"
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">
                           <StyledSearchIcon />
                        </InputAdornment>
                     ),
                  }}
               />
            </StyledSubHeader>

            <div>

            </div>

            <Footer />
         </FeedContainer>
      )
   }
}

const mapStateToProps = state => ({
   getToProducts: state.products.allProducts
})

const mapDispatchToProps = dispatch => ({
   getProducts: () => dispatch(getProducts()),
})

export default connect(
   mapStateToProps,
   mapDispatchToProps)
   (SearchPage);