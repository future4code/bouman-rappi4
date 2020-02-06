import React from 'react';
import { connect } from 'react-redux';
import { InputAdornment } from '@material-ui/core';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import Footer from '../Footer';
import { FormWrapper, StyledTextField, StyledSearchMain, FeedContainer, StyledSubHeader, StyledSearchIcon } from '../../style/styled'
import { getRestaurants, setRestaurantIdAction } from '../../action/restaurants';
import Header from '../../components/Header';
import Back from '../../imagens/ícones/back.png';
import RestaurantCard from '../../components/RestaurantCard'

class SearchPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         search: "",
      }
   }

   componentDidMount() {
      const token = window.localStorage.getItem("token")
      if(token === null){
        this.props.goToLoginPage()
      } else {
          this.props.getRestaurants()
      };
   } 


   handleFieldChange = event => {
      this.setState({
         [event.target.name]: event.target.value
      });

      this.setState({ search: event.target.value })
   };

   handleSetRestaurantId = (restaurantId) => {
      this.props.setRestaurantsDetail(restaurantId)
      this.props.goToRestaurantDetails()
   };

   render() {
      const { search } = this.state
      const { goToFeedPage, fetchRestaurants } = this.props

      let filteredRestaurants = fetchRestaurants.filter((restaurant) => {
         return restaurant.name === search
      })

      let mapRestaurants = (<p>Não encontramos :(</p>)

      if(search.length === 0){
         mapRestaurants = (<p>Busque pelo nome do restaurante</p>)
      } else if(filteredRestaurants.length > 0){
         mapRestaurants = filteredRestaurants.map((restaurant) => 
            <RestaurantCard 
               onClick={() => this.handleSetRestaurantId(restaurant.id)}
               key={restaurant.id} 
               name={restaurant.name} 
               img={restaurant.logoUrl} 
               price={restaurant.shipping} 
               deliveryTime={restaurant.deliveryTime}
            />       
         )
      }

      return (
         <FeedContainer>
            <Header title="Busca" img={Back} onClick={goToFeedPage}/>
            <StyledSubHeader>
               <FormWrapper>
                  <StyledTextField
                     color="primary"
                     onChange={this.handleFieldChange.bind(this)}
                     name="posts"
                     type="search"
                     placeholder="Resturante"
                     variant="outlined"
                     value={search}
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                                 <StyledSearchIcon />
                           </InputAdornment>
                        ),
                     }}
                  />
               </FormWrapper>
            </StyledSubHeader>
            <StyledSearchMain>
               {mapRestaurants}
            </StyledSearchMain>
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
   goToFeedPage: () => dispatch(push(routes.feedPage)),
   goToRestaurantDetails: () => dispatch(push(routes.restaurantDetails)),
   setRestaurantsDetail: (restaurantId) => dispatch(setRestaurantIdAction(restaurantId)),
})

export default connect(
   mapStateToProps,
   mapDispatchToProps)
   (SearchPage);