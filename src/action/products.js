import axios from 'axios';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4";

export const setProducts = (allProducts) => ({
    type: "SET_PRODUCTS",
    payload: {
        allProducts
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