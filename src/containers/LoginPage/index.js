import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledImgForms, StyledButtonForms, LoginWrapper, StyledTextField, StyledHeaderForms, SignUpButton } from "../../style/styled";
import LogoLogin from "../../imagens/ícones/logo-future-eats-invert.png";
import { login } from "../../action/login"

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state
        this.props.login(email, password)
    }

    render() {

        const { goToSignUpPage } = this.props

        return (
            <div>
                <StyledHeaderForms>
                    <StyledImgForms src={LogoLogin} />
                </StyledHeaderForms>
                <LoginWrapper onSubmit={this.handleSubmit}>
                    <h3>Entrar</h3>
                    <StyledTextField
                        color="primary"
                        onChange={this.handleChange}
                        name="email"
                        type="email"
                        label="E-mail"
                        required
                        variant="outlined"

                    />
                    <StyledTextField
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        label="Password"
                        required
                        variant="outlined"
                    />

                    <StyledButtonForms type="submit">Entrar</StyledButtonForms>
                    <span >Não possui Cadastro?<SignUpButton onClick={goToSignUpPage}>Clique aqui.</SignUpButton></span>
                </LoginWrapper>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
    goToSignUpPage: () => dispatch(push(routes.signUpPage)),
})

export default connect(
    null,
    mapDispatchToProps
)(LoginPage);