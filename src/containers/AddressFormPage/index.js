import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledImgForms, StyledButtonForms, LoginWrapper, StyledTextField, StyledHeaderForms, BackButton, HeaderSignUpPage } from "../../style/styled";
import { addAddress } from "../../action/login"
import BackIcon from "../../imagens/ícones/back.png"
import Header from '../../components/Header';

const AddressForm = [
    {
        name: 'street',
        type: 'text',
        label: 'Logradouro ',
        placeholder: 'Rua/AV.',
        required: true,
        pattern: "[A-Za-z]",
        variant: "outlined",
     },
     {
        name: 'number',
        type: 'number',
        label: 'Número',
        placeholder: 'Número',
        required: true,
        pattern: "[A-Za-^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$]{3,}",
        variant: "outlined",
     },
     {
         name: 'complement',
         type: 'text',
         label: 'Complemento',
         placeholder: 'Apto./Bloco',
         required: true,
         variant: "outlined",
     },
     {
        name: 'neighbourhood',
        type: 'text',
        label: 'Bairro',
        placeholder: 'Bairro',
        required: true,
        variant: "outlined",
    },
    {
        name: 'city',
        type: 'text',
        label: 'Cidade',
        placeholder: 'Cidade',
        required: true,
        variant: "outlined",
    },
    {
        name: 'state',
        type: 'text',
        label: 'Estado',
        placeholder: 'Estado',
        required: true,
        variant: "outlined",
    },
]

export class AddressFormPage extends React.Component {
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
        const { street, number, neighbourhood, city, state, complement } = this.state
        this.props.addAdress(street, number, neighbourhood, city, state, complement)
        
    }

    render() {
        const { goToSignUpPage } = this.props
        
        return (
            <div>
                <Header img={BackIcon} onClick={goToSignUpPage}/>
                <StyledHeaderForms>
                    <h3>Meu endereço</h3>
                </StyledHeaderForms>
                <LoginWrapper onSubmit={this.handleSubmit}>
                    {AddressForm .map(input =>(
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
                    <StyledButtonForms type="submit" >Salvar</StyledButtonForms>
                </LoginWrapper>
            </div>
        )
    }
} 

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
    addAddress: (street, number, neighbourhood, city, state, complement) => dispatch(addAddress(street, number, neighbourhood, city, state, complement)),
    goToLoginPage: () => dispatch(push(routes.loginPage)),
    goToSignUpPage: () => dispatch(push(routes.signUpPage)),
    goToFeedPage: () => dispatch(push(routes.feedPage))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AddressFormPage);