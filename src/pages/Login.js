import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../assets/Logo.svg';

import './Login.css';


class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    };

    handleLogin = e => {
        e.preventDefault();

        alert("Logando");
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

                    <button type="submit">Entrar</button>
                    <Link to="/register">Quero me cadastrar</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);