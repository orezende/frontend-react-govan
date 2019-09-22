import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputMask from 'react-input-mask';

import api from '../services/api';

import Logo from '../assets/Logo.svg';

import './styles/Register.css';


class Register extends Component {
    state = {
        email: "",
        password: "",
        passwordConfirmed: "",
        phoneNumber: "",
        error: "",
    };

    handleLogin = async e => {
        e.preventDefault();

        const { email, password, passwordConfirmed, phoneNumber } = this.state;

        if (!email || !password || !passwordConfirmed || !phoneNumber) {
            this.setState({ error: "Preencha todos os campos antes de prosseguir -_- " });
        } else {
            try {
                if (password === passwordConfirmed) {
                    await api.post('register/user', { email, password, phoneNumber });
                    this.props.history.push('/login');
                } else {
                    this.setState({ error: "Os campos de senhas devem ser iguais" });
                }
            } catch (err) {
                this.setState({ error: err.response.data.error });
            }
        }
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleLogin}>
                    <img src={Logo} alt="GoVan" />
                    {this.state.error && <p>{this.state.error}</p>}


                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        onChange={e => this.setState({ email: e.target.value })} />
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={e => this.setState({ password: e.target.value })} />
                    <input
                        type="password"
                        placeholder="Confirme sua senha"
                        onChange={e => this.setState({ passwordConfirmed: e.target.value })} />


                    <InputMask
                        mask="(99) 9 9999-9999"
                        min="0"
                        step="1"
                        placeholder="Digite seu número de celular"
                        onChange={e => this.setState({ phoneNumber: e.target.value })} >
                    </InputMask>

                    <button type="submit">Registar</button>
                    <Link to="/login">Já possuo conta</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Register)