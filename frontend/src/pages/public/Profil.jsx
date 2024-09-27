import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { accountService } from '@/_service/accountService';
import { userSelector } from '@/_Redux/selector/userSelector';

const Profil = () => {

  const { token } = accountService.getToken();
  const { firstName, lastName } = useSelector(userSelector);
  const [newFirstName, setNewFirstName] = useState(firstName)
  const [newLastName, setNewLastName] = useState(lastName)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const setinfos = async () => {
    const decodedToken = await accountService.getProfile(token);
    dispatch({ type: "User/setUserProfile", payload: { firstName: decodedToken.firstName, lastName: decodedToken.lastName } });
  }

useEffect(() => {
  if (accountService.isLogged()) {
      setinfos()
      setNewFirstName(firstName)
      setNewLastName(lastName)
  } else {
      navigate('/')
  }
  // eslint-disable-next-line
}, [firstName, lastName])


  return (
    <div>
     
        <p>Nom du compte : Compte épargne</p>
       
    </div>
  );
};

export default Profil;