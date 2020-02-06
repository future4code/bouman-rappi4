import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledButtonForms, LoginWrapper, StyledTextField } from "../../style/styled";
import Back from '../../imagens/ícones/back.png';
import Header from '../../components/Header';

const EditDataUserForm = [
    {
        name: 'username',
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

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state
        this.props.signup(username, email, password)
    }


    render() {
        const { goToProfilePage, goToAdressPage } = this.props

        return (
            <div>
                <Header title="Editar Perfil" img={Back} onClick={goToProfilePage}/>
                <LoginWrapper onSubmit={this.handleOnSubmit}>
                    {EditDataUserForm.map(input => (
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            required={input.required}
                            placeholder={input.placeholder}
                            pattern={input.pattern}
                            variant={input.variant}
                        />
                    ))}
                    <StyledButtonForms type="submit" onClick={goToAdressPage}>Salvar</StyledButtonForms>
                </LoginWrapper>
            </div>
        )
    }
}       

const mapDispatchToProps = dispatch => ({
    goToProfilePage: () => dispatch(push(routes.profilePage)),
    goToAdressPage: () => dispatch(push(routes.addressFormPage))
})

export default connect(
    null,
    mapDispatchToProps
)(EditDataUserPage);