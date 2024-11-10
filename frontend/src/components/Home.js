// src/components/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
// import './script.js';
function Home() {
    useEffect(() => {
        const username = localStorage.getItem('username');
        const logoutBtn = document.getElementById('logout-btn');

        if (username) {
            document.getElementById('username-display').innerText = `Welcome, ${username}`;
            logoutBtn.classList.remove('hidden');
        } else {
            logoutBtn.classList.add('hidden');
        }

        const handleLogout = () => {
            localStorage.removeItem('username');
            window.location.href = '/login';
        };

        logoutBtn.addEventListener('click', handleLogout);

        return () => logoutBtn.removeEventListener('click', handleLogout);
    }, []);

    return (
        <div>
            <header>
                <div className="logo"><h1>Online Art Gallery</h1></div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/artists">Artists</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li id="username-display"></li>
                        <li><button id="logout-btn" className="hidden">Logout</button></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <div className="hero-overlay"></div>
                    <h2>Online Web Gallery</h2>
                    <p>Explore beautiful artworks from talented artists around the world.</p>
                    <a href="#" className="explore-now-button">Explore Now</a>
                </section>

                <section className="featured-art">
                    <h3>Categories</h3>
                    <div className="art-grid" id="art-grid"></div>
                </section>

                <section className="about-us">
                    <h3>About Online Web Gallery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 FAD TEAM 3.</p>
                <div className="social-media">
                    <a href="https://facebook.com/fad-team-3" target="_blank">Facebook</a>
                    <a href="https://instagram.com/fad-team-3" target="_blank">Instagram</a>
                    <a href="https://twitter.com/fad-team-3" target="_blank">Twitter</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
