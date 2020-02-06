const initialState = {
    allRestaurants: [],
    selectedRestaurantId: "",
    selectedRestaurant: {},
    edditAddress:{}
}

const restaurantsReducer = (state = initialState, action) => {
    switch( action.type ) {
        case "SET_RESTAURANTS":
            const restauranstList =  action.payload.restaurants
            return {...state, allRestaurants: restauranstList}
        
        case "SET_RESTAURANT_ID_ACTION":
            const restaurant = action.payload.restaurantId
            return { ...state, selectedRestaurantId: restaurant}

        case "SET_RESTAURANT_DETAILS":
            const restaurantDetailsAction = action.payload.restaurantDetail
            return { ...state, selectedRestaurant: restaurantDetailsAction}
        
        case "SET_FULL_ADDRESS":
            const setFullAddressAction = action.payload.address
            return { ...state, edditAddress: setFullAddressAction}
            
        default:
            return state;
    }
}

export default restaurantsReducer;