import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InputMask from 'react-input-mask';

import api from '../services/api';

import Logo from '../assets/Logo.svg';

import './Register.css';


class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        birthDay: "",
        cpf: "",
        phoneNumber: "",
        error: "",
    };

    handleLogin = async e => {
        e.preventDefault();

        const { name, email, password, birthDay, cpf, phoneNumber } = this.state;
        console.log(this.state);

        if (!name || !email || !password || !birthDay || !cpf || !phoneNumber) {
            this.setState({ error: "Preencha todos os campos antes de prosseguir -_- " });
        }
        else{
            try{
                await api.post('register/user', {name, email, password, birthDay, cpf, phoneNumber});
                this.props.history.push('/');
            }catch(err){
                debugger;
                this.setState({error: err.response.data.error});
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
                        type="text"
                        placeholder="Digite seu nome completo"
                        onChange={e => this.setState({ name: e.target.value })} />

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
                        placeholder="Confirme sua senha" />

                    <InputMask
                        mask="99/99/9999"
                        type="text"
                        placeholder="Insira sua data de nascimento"
                        onChange={e => this.setState({ birthDay: e.target.value })} >
                    </InputMask>

                    <InputMask
                        mask="999.999.999-99"
                        type="text"
                        min="0"
                        step="1"
                        placeholder="Digite seu CPF"
                        onChange={e => this.setState({ cpf: e.target.value })} >
                    </InputMask>

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