const initialState = {
    allRestaurants: [],
    restaurantsDetails: {},
    restaurantIdSelected:"",
}

const productsReducer = (state = initialState, action) =>{
    switch(action.type){
        case "SET_PRODUCTS":
            const productsList =  action.payload.allRestaurants
            return {...state, allRestaurants: productsList}
        
        case "SET_RESTAURANTS_DETAILS":
            const restaurant = action.payload.restaurant
            return { ...state, restaurantsDetails: restaurant}

        case "SET_RESTAURANT_ID":
            const restaurantId = action.payload.restaurantIdSelected
            return { ...state, restaurantIdSelected: restaurantId}

        default:
            return state;
    }
}

export default productsReducer;