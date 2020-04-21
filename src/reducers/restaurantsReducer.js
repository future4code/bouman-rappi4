const initialState = {
    allRestaurants: [],
    selectedRestaurantId: "",
    selectedRestaurant: {},
    edditAddress: {},
    cartProducts: [],
}

const restaurantsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_RESTAURANTS":
            const restauranstList = action.payload.restaurants
            return { ...state, allRestaurants: restauranstList }

        case "ADD_PRODUCT_TO_CART":
            const selectedProductPosition = state.cartProducts.findIndex(product => product.id === action.payload.id);
            const newState = { ...state, cartProducts: [...state.cartProducts] }
            if (selectedProductPosition > -1) {
                newState.cartProducts[selectedProductPosition].quantity = action.payload.quantity
            } else {
                const { id, quantity, name, price, description, photoUrl } = action.payload
                newState.cartProducts.push({ id, quantity, name, price, description, photoUrl })
            }

            return newState;

        case "REMOVE_PRODUCT_FROM_CART":
            return state;

        case "SET_RESTAURANT_ID_ACTION":
            const restaurant = action.payload.restaurantId
            return { ...state, selectedRestaurantId: restaurant }

        case "SET_RESTAURANT_DETAILS":
            const restaurantDetailsAction = action.payload.restaurantDetail
            return { ...state, selectedRestaurant: restaurantDetailsAction }

        case "SET_FULL_ADDRESS":
            const setFullAddressAction = action.payload.address
            return { ...state, edditAddress: setFullAddressAction }

        case "SET_CART_PRODUCTS":
            const setCartProducts = action.payload.cartProducts
            return { ...state, cartProducts: setCartProducts }
        default:
            return state;
    }
}

export default restaurantsReducer;