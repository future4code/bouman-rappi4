import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../containers/Router/index";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4/"

export const login = (email, password) => async (dispatch) => {
    const loginInformation = {
      email,
      password
    }
     
    try{
    const response = await axios.post(`${baseURL}login`, loginInformation);
    window.localStorage.setItem("token", response.data.token)
    dispatch(push(routes.feedPage))

   }catch{
    window.alert("Erro no login")
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
     
    try{
    const response = await axios.post(`${baseURL}signup`, signupInformation);
    window.localStorage.setItem("token", response.data.token)

    dispatch(push(routes.adressFormPage))


   }catch{
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
  
  try{
  const response = await axios.put(`${baseURL}address`, addAdressInformation, headers);
  window.localStorage.setItem("token", response.data.token)
  dispatch(push(routes.feedPage))

 }catch{
  window.alert("Erro no login")
  dispatch(push(routes.adressFormPage))

}
}

