import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { accountService } from '@/_service/accountService';
import { userSelector } from '@/_Redux/selector/userSelector';

const Profil = () => {
  const { token } = accountService.getToken();
  const { firstName, lastName } = useSelector(userSelector);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setInfos = async () => {
    const decodedToken = await accountService.getProfile(token);
    dispatch({ type: 'User/setUserProfile', payload: { firstName: decodedToken.firstName, lastName: decodedToken.lastName } });
  };

  useEffect(() => {
    if (accountService.isLogged()) {
      setInfos();
      setNewFirstName(firstName);
      setNewLastName(lastName);
    } else {
      navigate('/');
    }
  }, [firstName, lastName]);

  return (
    <div className="main">
        <div className="info">
        <h1>Welcome back</h1>
        <div className="input-group">
          <input type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} />
          <input type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)} />
        </div>
        <div className="button-group">
          <button className="edit-button">Save</button>
          <button className="edit-button">Cancel</button>
        </div>
      </div>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x67124)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x5201)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
};

export default Profil;