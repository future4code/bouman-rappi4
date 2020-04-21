import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { StyledButtonForms, LoginWrapper, StyledTextField } from "../../style/styled";
import BackIcon from "../../imagens/ícones/back.png";
import Header from '../../components/Header';
import { getFullAddress, addAddress } from "../../action/login"

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

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            this.props.goToLoginPage()
        } else {
            this.props.getFullAddress()
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.edditAddress !== this.props.edditAddress) {
            this.setState({ form: this.props.edditAddress })
        }
    }

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value

            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { street, number, neighbourhood, city, state, complement } = this.state.form
        this.props.addAddress(street, number, neighbourhood, city, state, complement)
    }

    render() {
        const { goToProfilePage, goToAdressPage } = this.props

        return (
            <div>
                <Header title="Editar Endereço" img={BackIcon} onClick={goToProfilePage} />
                <LoginWrapper onSubmit={this.handleSubmit}>
                    {EditAddressForm.map(input => (
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
                    <StyledButtonForms type="submit" onClick={goToAdressPage}>Salvar</StyledButtonForms>
                </LoginWrapper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    edditAddress: state.restaurantsReducer.edditAddress
})

const mapDispatchToProps = dispatch => ({
    goToProfilePage: () => dispatch(push(routes.profilePage)),
    goToAdressPage: () => dispatch(push(routes.adressFormPage)),
    getFullAddress: () => dispatch(getFullAddress()),
    addAddress: (street, number, neighbourhood, city, state, complement) => dispatch(addAddress(street, number, neighbourhood, city, state, complement)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAddressPage);
