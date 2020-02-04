import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledImgForms, StyledButtonForms, LoginWrapper, StyledTextField, StyledHeaderForms, BackButton, HeaderSignUpPage } from "../../style/styled";
import BackIcon from "../../imagens/ícones/back.png";

const AdressForm = [
    {
        name: 'username',
        type: 'text',
        label: 'Logradouro ',
        placeholder: 'Rua/AV.',
        required: true,
        pattern: "[A-Za-z]",
        variant: "outlined",
     },
     {
        name: 'email',
        type: 'email',
        label: 'Número',
        placeholder: 'Número',
        required: true,
        pattern: "[A-Za-^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$]{3,}",
        variant: "outlined",
     },
     {
         name: 'password',
         type: 'password',
         label: 'Complemento',
         placeholder: 'Apto./Bloco',
         required: true,
         variant: "outlined",
     },
     {
        name: 'password',
        type: 'password',
        label: 'Bairro',
        placeholder: 'Bairro',
        required: true,
        variant: "outlined",
    },
    {
        name: 'password',
        type: 'password',
        label: 'Cidade',
        placeholder: 'Cidade',
        required: true,
        variant: "outlined",
    },
    {
        name: 'password',
        type: 'password',
        label: 'Estado',
        placeholder: 'Estado',
        required: true,
        variant: "outlined",
    },
]

export class AdressFormPage extends React.Component {
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
        const { goToLoginPage, goToFeedPage, goToSignUpPage } = this.props
        
        return (
            <div>
                <StyledHeaderForms>
                    <HeaderSignUpPage>
                        <BackButton onClick={goToSignUpPage} src={BackIcon}/>
                    </HeaderSignUpPage>
                </StyledHeaderForms>
                <LoginWrapper>
                    <h1>Meu endereço</h1>
                    {AdressForm .map(input =>(
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
                    <StyledButtonForms onClick={goToFeedPage}>Salvar</StyledButtonForms>
                </LoginWrapper>
            </div>
        )
    }
} 

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    goToSignUpPage: () => dispatch(push(routes.signUpPage)),
    goToFeedPage: () => dispatch(push(routes.feedPage))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AdressFormPage);