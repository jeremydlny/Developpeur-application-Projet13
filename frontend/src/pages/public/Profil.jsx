import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { accountService } from '@/_service/accountService';
import { userSelector } from '@/_Redux/selector/userSelector';
import { setUserProfile } from '@/_Redux/Slices/userSlice';
import accountsData from '@/data/accountsData.json';

const Profil = () => {
  const { token } = accountService.getToken();
  const { firstName, lastName } = useSelector(userSelector);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Récupération des infos de l'utilisateur
  const setInfos = async () => {
    const decodedToken = await accountService.getProfile(token);
    dispatch(setUserProfile({ firstName: decodedToken.firstName, lastName: decodedToken.lastName }));
  };

  // Synchronisation des inputs avec les données du store
  useEffect(() => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
  }, [firstName, lastName]);

  // Vérification si l'utilisateur est connecté
  useEffect(() => {
    if (accountService.isLogged()) {
      setInfos();
    } else {
      navigate('/');
    }
  }, []);

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { firstName: newFirstName, lastName: newLastName });

    dispatch(setUserProfile({ firstName: newFirstName, lastName: newLastName }));

    // Log pour confirmer la mise à jour dans le store
    console.log("Store updated:", { firstName: newFirstName, lastName: newLastName });
  };

  return (
    <div className="main">
      <div className="info">
        <h1>Welcome back</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="edit-button">Save</button>
            <button type="button" className="edit-button">Cancel</button>
          </div>
        </form>
      </div>

      {/* Affichage des comptes bancaires */}
      {accountsData.map((account) => (
        <section key={account.id} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Profil;