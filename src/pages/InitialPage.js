import React from 'react';
import logo from '../assets/Logo.svg';
import './InitialPage.css';


export default function InitialPage({ history }) {

    async function handleSubmit(e) {
        e.preventDefault();

        history.push(`/login`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="GoVan"></img>

                <button type="submit">Vamos começar</button>
            </form>
        </div>
    );
}
