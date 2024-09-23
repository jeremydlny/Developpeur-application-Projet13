//Login.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSelector, setToken, setLoading, setError } from '@/_Features/Slices/authSlice';
import { accountService } from '@/_service/accountService';
import { useNavigate } from 'react-router-dom';
import "@/Style/main.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(loginSelector);  // Utilisation de loginSelector pour récupérer le token
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));  // Met à jour l'état de chargement
    try {
      const response = await accountService.loginUser({ email, password });
      
      // Ajoute ce console.log pour voir toute la réponse de l'API
      console.log('Réponse API:', response);

      // Vérifie si le token est dans response.data.token
      console.log("Token JWT:", response.data.body.token);

      dispatch(setToken(response.data.body.token));  // Sauvegarde le token correctement
      navigate('/profile');  // Redirige vers la page profil après la connexion
    } catch (err) {
      dispatch(setError('Invalid credentials'));  // Gère l'erreur en cas d'échec
    } finally {
      dispatch(setLoading(false));  // Désactive l'état de chargement
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
            <button className="sign-in-button" type="submit" disabled={isLoading}>Sign In</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
