// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login_css.css';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                localStorage.setItem('username', username);
                navigate('/');
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <button type="submit">Login</button>
                </div>
                <p className="register-link">
                    Don't have an account? <Link to="/signup">Register here</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
