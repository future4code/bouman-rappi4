import React, { Component } from 'react';
import { ProductCardContainer, ProductImage, ProductInfoContainer, ProductName, ProductDescription, ProductPrice } from './styled'
import { Dialog } from '@material-ui/core';
import { connect } from 'react-redux';
import { placeOrder } from '../../action/order';

class ProductCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addCartWindow: false,
        }
    }

    handleOpenAddWindow = () => {
        this.setState({addCartWindow: true})
    }

    handleCloseAddWindow = () => {
        this.setState({addCartWindow: false})
    }

    render() {
        return (
            <ProductCardContainer>
                <ProductImage alt="image" src={this.props.img}/>
                <ProductInfoContainer>
                    <ProductName>
                        {this.props.name}
                    </ProductName>
                    <ProductDescription>
                        {this.props.description}
                    </ProductDescription>
                    <ProductPrice>
                        R$ {this.props.price}
                    </ProductPrice>
                    
                </ProductInfoContainer>

                <button onClick={this.handleOpenAddWindow}> Adicionar                   
                </button>
                <Dialog open={this.state.addCartWindow} onClose={this.handleCloseAddWindow}>
                        <p>Selecione a quantidade desejada</p>
                        <select>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <button>Adicionar ao Carrinho</button>
                </Dialog>

            </ProductCardContainer>
        
    )}
}

function mapStateToProps(state) {
    return {
       
    }
 }
 
 function mapDispatchToProps(dispatch) {
    return {
       placeOrder: (id,quantity,paymentMethod) => dispatch(placeOrder(id,quantity,paymentMethod))
    }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);


