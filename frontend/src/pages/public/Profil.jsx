import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/_Redux/Slices/authSlice';
import { userSelector } from '@/_Redux/Slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Profil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);  // Récupérer les données utilisateur depuis Redux

  const handleLogout = () => {
    dispatch(logout());  // Déclencher l'action de déconnexion
    navigate('/');  // Rediriger vers la page d'accueil après la déconnexion
  };

  return (
    <div>
      <h1>Profil de {user?.firstName}</h1>
      <p>Email: {user?.email}</p>

      <h2>Informations bancaires</h2>
      <div>
        <p>Nom du compte : Compte épargne</p>
        <p>Solde : 5000€</p>  {/* Placeholder pour les informations bancaires */}
      </div>

      <button onClick={handleLogout}>Se déconnecter</button>  {/* Bouton de déconnexion */}
    </div>
  );
};

export default Profil;