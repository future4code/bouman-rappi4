import React from 'react';
import { connect } from 'react-redux';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import styled from 'styled-components';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import Footer from '../Footer';
import { getRestaurants } from '../../action/restaurants';
import Header from '../../components/Header';

const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledDivTeste = styled.div`
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
   constructor(props) {
      super(props);
      this.state = {
         form: [],
         searchTerms: "",
      }
   }

   componentDidMount() {
     this.props.getRestaurants()
   }   

   handleInputChange = (event) => {
      const { value } = event.target;
      this.setState({ searchTerms: value })
   }

   handleOnSubmit = () => {
      
   }

   render() {

      
      return (
         <FeedContainer>
            <Header title="Rappi4" />
            <StyledDivTeste>
               teste
            </StyledDivTeste>
            <StyledSubHeader>
               <form>
                  <StyledTextField 
                     autoFocus 
                     onChange={this.handleInputChange} 
                     type="search" 
                     placeholder="Restaurante" 
                     variant="outlined"
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <StyledSearchIcon />
                           </InputAdornment>
                        ),
                     }}
                  />
               </form>
            </StyledSubHeader>

            <div>
              
            </div>

            <Footer />
         </FeedContainer>
      )
   }
}

const mapStateToProps = state => ({
   fetchRestaurants: state.restaurantsReducer.allRestaurants
})

const mapDispatchToProps = dispatch => ({
   getRestaurants: () => dispatch(getRestaurants()),
})

export default connect(
   mapStateToProps,
   mapDispatchToProps)
   (SearchPage);