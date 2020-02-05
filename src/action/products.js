import axios from 'axios';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4";

export const setProducts = (allRestaurants) => ({
    type: "SET_PRODUCTS",
    payload: {
        allRestaurants
    }
})

export const getProducts = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth:token
        }
    };

    try {
        const response = await axios.get(`${baseURL}/restaurants`, axiosHeader);
        dispatch(setProducts(response.data.restaurants));

    }catch{
        window.alert("erro ao mostar os produtos");

    }
}

export const setRestaurantsDetails = (restaurant) => ({
    type: "SET_RESTAURANTS_DETAILS",
    payload: {
        restaurant,
    }
})

export const getRestaurantsDetails = (restaurantId) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth: token,
        }
    }

    try{    
        const response = await axios.get(`${baseURL}/restaurants/${restaurantId}`, axiosHeader)
        dispatch(setRestaurantsDetails(response.data.restaurant))
    }catch{
        window.alert("falha ao carregar detalhes")
    }
}

export const setRestaurantIdSelected = (restaurantIdSelected) => ({
    type: 'SET_RESTAURANT_ID',
    payload: {
        restaurantIdSelected,
    }
})