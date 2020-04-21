import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledImgForms, StyledButtonForms, LoginWrapper, StyledTextField, StyledHeaderForms, BackButton, HeaderSignUpPage } from "../../style/styled";
import LogoLogin from "../../imagens/ícones/logo-future-eats-invert.png";
import BackIcon from "../../imagens/ícones/back.png";
import { signup } from "../../action/login"
import Header from '../../components/Header';

const CadastroForm = [
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
        type: 'number',
        label: 'CPF',
        placeholder: '000.000.000-00',
        required: true,
        variant: "outlined",
    },
    {
        name: 'password',
        type: 'password',
        label: 'Senha',
        placeholder: 'Mínimo 6 caracteres',
        required: true,
        variant: "outlined",
    },
    {
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirmar',
        placeholder: 'Confirme a senha anterior',
        required: true,
        variant: "outlined",
    },
]

export class SignUpPage extends React.Component {
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
        const { name, email, cpf, password } = this.state
        this.props.signup(name, email, cpf, password)
    }


    render() {
        const { goToLoginPage } = this.props

        return (
            <div>
                <Header img={BackIcon} onClick={goToLoginPage} />
                <StyledHeaderForms>
                    <StyledImgForms src={LogoLogin} />
                </StyledHeaderForms>
                <LoginWrapper onSubmit={this.handleSubmit}>
                    <h3>Cadastre-se</h3>
                    {CadastroForm.map(input => (
                        <StyledTextField
                            onChange={this.handleChange}
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            required={input.required}
                            placeholder={input.placeholder}
                            pattern={input.pattern}
                            variant={input.variant}
                        />
                    ))}
                    <StyledButtonForms type="submit" >Criar</StyledButtonForms>
                </LoginWrapper>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signup: (name, email, cpf, password) => dispatch(signup(name, email, cpf, password)),
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    goToAddressPage: () => dispatch(push(routes.addressFormPage))
})

export default connect(
    null,
    mapDispatchToProps
)(SignUpPage);