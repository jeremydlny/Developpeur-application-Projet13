//Login.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setLoading, setError } from '@/_Redux/Slices/authSlice';
import { accountService } from '@/_service/accountService';
import { useNavigate } from 'react-router-dom';
import "@/Style/main.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect( () => {
    verifyToken();
  
}, [navigate]);

  const verifyToken = async () => {
    const response = await accountService.isLogged();
    console.log(response);
    if (response) {
      navigate('/profil');
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await accountService.loginUser({ email, password });

      accountService.saveToken(response.data.body.token);  // Enregistre le token dans le local storage
      navigate('/profil');  // Redirige vers la page profil après la connexion
    } catch (err) {
      dispatch(setError('Invalid credentials'));  // Gère l'erreur en cas d'échec
    } 
};
  

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="sign-in-button" type="submit" disabled={setLoading}>Sign In</button>
          </form>
        </section>
      </main>
    </div>
  );
};


export default Login;
