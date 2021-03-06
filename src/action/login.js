import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../containers/Router/index";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4/"

export const login = (email, password) => async (dispatch) => {
  const loginInformation = {
    email,
    password
  }

  try {
    const response = await axios.post(`${baseURL}login`, loginInformation);
    window.localStorage.setItem("token", response.data.token)
    dispatch(push(routes.feedPage))

  } catch{
    window.alert("Usuario não encontrado")
    dispatch(push(routes.loginPage))

  }
}

export const signup = (name, email, cpf, password) => async (dispatch) => {
  const signupInformation = {
    name,
    email,
    cpf,
    password,
  }

  try {
    const response = await axios.post(`${baseURL}signup`, signupInformation);
    window.localStorage.setItem("token", response.data.token)
    dispatch(push(routes.addressFormPage))

  } catch{
    window.alert("Erro na criação")
    dispatch(push(routes.signUpPage))

  }
}
export const addAddress = (street, number, neighbourhood, city, state, complement) => async (dispatch) => {
  const addAdressInformation = {
    street,
    number,
    neighbourhood,
    city,
    state,
    complement
  }
  const headers = { headers: { auth: window.localStorage.getItem("token") } }

  try {
    const response = await axios.put(`${baseURL}address`, addAdressInformation, headers);
    window.localStorage.setItem("token", response.data.token)
    dispatch(push(routes.feedPage))

  } catch{
    window.alert("Erro no login")
    dispatch(push(routes.adressFormPage))

  }
}

export const setFullAddressAction = (address) => ({
  type: "SET_FULL_ADDRESS",
  payload: {
    address,
  }
})

export const getFullAddress = () => async (dispatch) => {
  const headers = { headers: { auth: window.localStorage.getItem("token") } }

  try {
    const response = await axios.get(`${baseURL}profile/address`, headers);
    dispatch(setFullAddressAction(response.data.address))
  } catch{
    window.alert("falha ao carregar informações")
  }
}