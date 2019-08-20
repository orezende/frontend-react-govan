import React from 'react';
import logo from '../assets/Logo.svg';
import './Login.css';
// import { Container } from './styles';

export default function Login() {
    return (
        <div className="login-container">
            <form >
                <img src={logo} alt="GoVan"></img>
                
                <button type="submit">Vamos começar</button>
            </form>
        </div>
    );
}
