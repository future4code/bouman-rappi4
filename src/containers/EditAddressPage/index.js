import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledButtonForms, LoginWrapper, StyledTextField } from "../../style/styled";
import BackIcon from "../../imagens/ícones/back.png";
import Header from '../../components/Header';

const EditAddressForm = [
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

export class EditAddressPage extends React.Component {

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
                <Header title="Editar Endereço" img={BackIcon} onClick={goToProfilePage}/>
                <LoginWrapper onSubmit={this.handleOnSubmit}>
                    {EditAddressForm.map(input => (
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

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    goToProfilePage: () => dispatch(push(routes.profilePage)),
    goToAdressPage: () => dispatch(push(routes.adressFormPage))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAddressPage);
