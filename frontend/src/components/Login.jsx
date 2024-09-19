import React from 'react';
import '../Style/main.css';  // Import du CSS global

// Import du logo
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';

const Login = () => {
  return (
    <div>
      <Header isLoggedIn={false} /> {/* L'utilisateur n'est pas connecté */}

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Login;