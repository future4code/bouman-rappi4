import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledButtonForms, LoginWrapper, StyledTextField } from "../../style/styled";
import Back from '../../imagens/ícones/back.png';
import Header from '../../components/Header';
import { getProfile, updateProfile } from '../../action/profile';


const EditDataUserForm = [
    {
        name: 'name',
        type: 'text',
        label: 'Nome ',
        placeholder: 'Nome e Sobrenome',
        required: true,
        pattern: "[A-Za-z]",
        variant: "outlined",
     },
     {
        name: 'email',
        type: 'email',
        label: 'E-mail: ',
        placeholder: 'email@email.com',
        required: true,
        pattern: "[A-Za-^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$]{3,}",
        variant: "outlined",
     },

    {
        name: 'cpf',
        type: 'cpf',
        label: 'CPF',
        placeholder: 'Digite cpf com dígito',
        required: true,
        pattern: "d{3}.{3}.d{3}-d{2}",
        variant: "outlined",
    },
]

export class EditDataUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        }

    }

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if(token === null){
          this.props.goToLoginPage()
        } else {
            this.props.getProfile()
        };
    }

    componentDidUpdate (prevProps) {
        if (prevProps.profile !== this.props.profile){
            this.setState({form: this.props.profile})
        }
    }

    handleChange = event => {
        this.setState({
            form:  {
                ...this.state.form,
                [event.target.name]: event.target.value
            
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, cpf } = this.state.form
        this.props.updateProfile( name, email, cpf )
        console.log(this.state.form)
    }


    render() {
        const { goToProfilePage, goToAdressPage } = this.props

        return (
            <div>
                <Header title="Editar Perfil" img={Back} onClick={goToProfilePage}/>
                <LoginWrapper onSubmit={this.handleSubmit}>
                    {EditDataUserForm.map(input => (
                        <StyledTextField
                            onChange={this.handleChange}
                            name={input.name}
                            type={input.type}
                            value={this.state.form[input.name]}
                            label={input.label}
                            required={input.required}
                            placeholder={input.placeholder}
                            pattern={input.pattern}
                            variant={input.variant}
                        />
                    ))}
                    <StyledButtonForms type="submit">Salvar</StyledButtonForms>
                </LoginWrapper>
            </div>
        )
    }
}       

const mapStateToProps = state => ({
    profile: state.profileReducer.profile

})

const mapDispatchToProps = dispatch => ({
    goToProfilePage: () => dispatch(push(routes.profilePage)),
    goToAdressPage: () => dispatch(push(routes.addressFormPage)),
    getProfile: () => dispatch(getProfile()), 
    updateProfile: (name,email,cpf) => dispatch(updateProfile(name,email,cpf))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDataUserPage);