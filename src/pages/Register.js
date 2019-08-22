import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.svg';

import './Login.css';


export default class Login extends Component {
    state = {
        email: "",
        password: "",
        birthDay: "",
        error: "",
    };

    handleLogin = e => {
        e.preventDefault();

        alert("Registrando");
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleLogin}>
                    <img src={Logo} alt="GoVan" />
                    {this.state.error && <p>this.state.error</p>}

                    <input
                        type="text"
                        placeholder="Digite seu e-mail"
                        onChange={e => this.setState({ email: e.target.value })} />
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={e => this.setState({ email: e.target.value })} />

                    <input
                        type="password"
                        placeholder="Confirme sua senha"
                        onChange={e => this.setState({ email: e.target.value })} />

                    <input
                        type="date"
                        placeholder="Insira sua data de nascimento"
                        onChange={e => this.setState({ birthDay: e.target.value })} />

                    <input
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Digite seu CPF"
                        onChange={e => this.setState({ birthDay: e.target.value })} />

                    <input
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Digite seu número de celular"
                        onChange={e => this.setState({ birthDay: e.target.value })} />

                    <button type="submit">Entrar</button>
                    <Link to="/register">Quero me cadastrar</Link>
                </form>
            </div>
        );
    }
}