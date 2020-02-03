import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import Loader from "../../components/Loader/Loader";
import { StyledImgForms, StyledButtonForms, LoginWrapper, StyledTextField, StyledHeaderForms } from "../../style/styled";
import LogoLogin from "../../imagens/ícones/logo-future-eats-invert.png";

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

    }

    render() {
        const { goToSignUpPage, goToFeedPage } = this.props
        
        return (
            <div>
                <StyledHeaderForms>
                    <StyledImgForms src={LogoLogin}/>
                </StyledHeaderForms>
                <LoginWrapper>
                    <h3>Entrar</h3>
                    <StyledTextField
                        color="primary"
                        onChange={this.handleFieldChange}
                        name="email"
                        type="email"
                        label="E-mail"
                        required
                        variant="outlined"

                    />
                    <StyledTextField
                        onChange={this.handleFieldChange}
                        name="password"
                        type="password"
                        label="Password"
                        required
                        variant="outlined"
                    />
                    
                    <StyledButtonForms onClick={goToFeedPage}>Entrar</StyledButtonForms>
                    <span >Não possui Cadastro?<button onClick={goToSignUpPage}>Clique aqui.</button></span>
                </LoginWrapper>
            </div>
        )
    }
} 

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
    goToSignUpPage: () => dispatch(push(routes.signUpPage)),
    goToFeedPage: () => dispatch(push(routes.feedPage))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (LoginPage);