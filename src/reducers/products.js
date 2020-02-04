const initialState = {
    allRestaurants: [],
    restaurantsDetails: {},
}

const productsReducer = (state = initialState, action) =>{
    switch(action.type){
        case "SET_PRODUCTS":
            const productsList =  action.payload.allRestaurants
            return {...state, allRestaurants: productsList}
        
        case "SET_RESTAURANTS_DETAILS":
            const restaurant = action.payload.restaurant
            return { ...state, restaurantsDetails: restaurant}

        default:
            return state;
    }
}

export default productsReducer;