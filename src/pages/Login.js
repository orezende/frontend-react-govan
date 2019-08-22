import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

import {login} from '../services/auth'

import api from '../services/api';

import './Login.css';


class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    };

    handleLogin = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
          this.setState({ error: "Preencha todos os campos para prosseguir!" });
        } else {
          try {
            const response = await api.post("auth/user", { email, password });
            login(response.data.token);
            this.props.history.push("/app");
          } catch (err) {
            this.setState({error: err.response.data.error});
          }
        }
      };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleLogin}>
                    <img src={Logo} alt="GoVan" />
                    {this.state.error && <p>{this.state.error}</p>}

                    <input
                        type="text"
                        placeholder="Digite seu e-mail"
                        onChange={e => this.setState({ email: e.target.value })} />
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={e => this.setState({ password: e.target.value })} />

                    <button type="submit">Entrar</button>
                    <Link to="/register">Quero me cadastrar</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);