import axios from 'axios'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4";


export const setOrder = (order) =>({
    type: "SET_ORDER",
    payload: {
        order,
    }
})


export const getActiveOrder = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth:token,
        }
    }

    try{
        const response = await axios.get(`${baseURL}/active-order`, axiosHeader)
        dispatch(setOder(response.data.order))

    }catch{
        window.alert("Erro ao capturar Order")
    }
}

export const placeOrder = (id,quantity,paymentMethod) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth: token
        }
    }

    const placeOrderInfo = {
        id,
        quantity,
        paymentMethod,
    }

    try{
        await axios.post(`${baseURL}/restaurants/${idRestaurant}/order`, axiosHeader, placeOrderInfo)
        dispatch(getActiveOrder())
    }catch{
        window.alert("Erro")
    }

}