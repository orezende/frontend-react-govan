import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputMask from 'react-input-mask';

import Logo from '../assets/Logo.svg';
import {login} from '../services/auth'
import api from '../services/api';
import './styles/Login.css';




class Login extends Component {
    state = {
        phoneNumber: "",
        password: "",
        error: ""
    };

    handleLogin = async e => {
        e.preventDefault();
        const { phoneNumber, password } = this.state;
        if (!phoneNumber || !password) {
          this.setState({ error: "Preencha todos os campos para prosseguir!" });
        } else {
          try {
            const response = await api.post("auth/user", { phoneNumber, password });
            login(response.data.token);
            this.props.history.push("/index");
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

                    <InputMask
                        mask="(99) 9 9999-9999"
                        min="0"
                        step="1"
                        placeholder="Digite seu número de celular."
                        onChange={e => this.setState({ phoneNumber: e.target.value })} >
                    </InputMask>

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