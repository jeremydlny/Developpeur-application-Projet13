import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { accountService } from "@/_service/accountService";
import { useDispatch, useSelector } from 'react-redux';
import '@/Style/layout/header.css';

import Logo from '@/assets/argentBankLogo.png';
import { userSelector } from '@/_Redux/selector/userSelector.js';

const Header = () => {

    const { firstName } = useSelector(userSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let logout = () => {
        accountService.logout()
        dispatch({ type: "User/setUserProfile", payload: { firstName: '', lastName: '' } })
        navigate('/')
    }

    return (
        <header className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {
                accountService.isLogged() &&
                <nav>
                    <NavLink to="/profil" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </NavLink>
                    <NavLink to="/" onClick={logout} className="main-nav-item">
                        <i className="fa fa-sign-out" />
                        Sign Out
                    </NavLink>
                </nav>
            }
            {
                !accountService.isLogged() &&
                <nav>
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle" />
                        Sign In
                    </NavLink>
                </nav>
            }

        </header >
    );

};

export default Header;