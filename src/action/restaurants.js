import axios from 'axios';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4";

export const setRestaurants = (restaurants) => ({
    type: "SET_RESTAURANTS",
    payload: {
        restaurants,
    }
})

export const addProductToCart = (id, quantity, name, price, description, photoUrl) => ({
    type: "ADD_PRODUCT_TO_CART",
    payload: {
        id,
        quantity,
        name,
        price,
        description,
        photoUrl,
    }
});

export const removeProductFromCart = (id) => ({
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: {
        id,
    }
});

export const getRestaurants = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth: token
        }
    };

    try {
        const response = await axios.get(`${baseURL}/restaurants`, axiosHeader);
        dispatch(setRestaurants(response.data.restaurants));

    } catch{
        window.alert("erro ao mostar os produtos");

    }
}

export const setRestaurantIdAction = (restaurantId) => ({
    type: "SET_RESTAURANT_ID_ACTION",
    payload: {
        restaurantId,
    }
})

export const setRestaurantDetailsAction = (restaurantDetail) => ({
    type: "SET_RESTAURANT_DETAILS",
    payload: {
        restaurantDetail,
    }
})

export const getRestaurantsDetails = (restaurantId) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth: token,
        }
    }

    try {
        const response = await axios.get(`${baseURL}/restaurants/${restaurantId}`, axiosHeader)
        dispatch(setRestaurantDetailsAction(response.data.restaurant))
    } catch{
        window.alert("falha ao carregar detalhes")
    }

}





























































































