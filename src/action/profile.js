import axios from 'axios'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4";

// pega os dados do usuario logado
export const setProfile = (profile) =>({
    type: "SET_PROFILE",
    payload: {
        profile,
    }
})


export const getProfile = () => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth:token,
        }
    }

    try{
        const response = await axios.get(`${baseURL}/profile`, axiosHeader)
        dispatch(setProfile(response.data.user))

    }catch{
        window.alert("Erro ao capturar profile")
    }
}

//edita os dados do usuário

export const updateProfile = (name,email,cpf) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const axiosHeader = {
        headers: {
            auth: token,
        }
    }

    const profileInfo = {
        name,
        email,
        cpf,
    }

    try{
        await axios.put(`${baseURL}/profile`,profileInfo, axiosHeader)
        dispatch(getProfile())
        window.alert("Sucesso")

    }catch{
        window.alert("Erro ao editar perfil")
    }

}