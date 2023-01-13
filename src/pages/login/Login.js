import React from 'react';
import './Login.css';

function Login({toggleIsAuthenticated}) {
    return (
        <section className="login-container">
            <h1>Login pagina</h1>
            <p>Druk op de knop om in te loggen</p>
            <button type="button" onClick={toggleIsAuthenticated}>Login</button>
        </section>
    );
}

export default Login;