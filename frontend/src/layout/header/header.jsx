import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';

const Header = ({ isLoggedIn, userName }) => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        {!isLoggedIn ? (
          // Header pour les pages où l'utilisateur n'est pas connecté (Home et Login)
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        ) : (
          // Header pour les pages où l'utilisateur est connecté (Profil)
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i> {userName}
            </Link>
            <Link className="main-nav-item" to="/logout">
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;