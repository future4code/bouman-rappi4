import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import Loader from "../../components/Loader/Loader";
import { StyledImgForms, StyledButtonForms, LoginWrapper, StyledTextField, StyledHeaderForms, BackButton, HeaderSignUpPage } from "../../style/styled";
import LogoLogin from "../../imagens/ícones/logo-future-eats-invert.png";
import BackIcon from "../../imagens/ícones/back.png";

const CadastroForm = [
    {
        name: 'username',
        type: 'text',
        label: 'Nome ',
        placeholder: 'Nome e Sobrenome',
        required: true,
        pattern: "[A-Za-z]"
     },
     {
        name: 'email',
        type: 'email',
        label: 'E-mail: ',
        placeholder: 'email@email.com',
        required: true,
        pattern: "[A-Za-^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$]{3,}",
     },
     {
         name: 'password',
         type: 'password',
         label: 'CPF',
         placeholder: '000.000.000-00',
         required: true,
     },
     {
        name: 'password',
        type: 'password',
        label: 'Senha',
        placeholder: 'Mínimo 6 caracteres',
        required: true,
    },
    {
        name: 'password',
        type: 'password',
        label: 'Confirmar',
        placeholder: 'Confirme a senha anterior',
        required: true,
    },
]

export class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        }

    }

    render() {
        const { goToLoginPage, goToAdressPage } = this.props
        
        return (
            <div>
                <HeaderSignUpPage>
                    <BackButton onClick={goToLoginPage} src={BackIcon}/>
                </HeaderSignUpPage>
                <StyledHeaderForms>
                    <StyledImgForms src={LogoLogin}/>
                </StyledHeaderForms>
                <LoginWrapper onSubmit={this.handleOnSubmit}>
                    <h1>Cadastre-se</h1>
                    {CadastroForm .map(input =>(
                        <StyledTextField
                            onChange={this.handleFieldChange}
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            required={input.required}
                            placeholder={input.placeholder}
                            pattern={input.pattern}
                        />
                    ))}
                    <StyledButtonForms type="submit" onClick={goToAdressPage} >Criar</StyledButtonForms>
                    <BackButton onClick={goToLoginPage} src={BackIcon}/>
                </LoginWrapper>
            </div>
        )
    }
} 

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    goToAdressPage: () => dispatch(push(routes.adressFormPage))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SignUpPage);