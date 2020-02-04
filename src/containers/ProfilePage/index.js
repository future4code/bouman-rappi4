import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import Header from '../../components/Header';

export class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header title="Meu Perfil"/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
