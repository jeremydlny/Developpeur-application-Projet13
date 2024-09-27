// accountService.js

import Axios from '@/_service/callerService.js'

let loginUser = (data) => {
  return Axios.post('/api/v1/user/login', data)
}

let logout = () => {
  localStorage.removeItem('token')
}

// fonction recuperation du token
let getToken = () => {
  return localStorage.getItem('token')
}

// fonction insertion du token dans le local storage
let saveToken = (token) => { 
  localStorage.setItem('token', token)
}

// fonction verification connexion
let isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token
}


let getProfile = async (profileData, token) => {
  const config = {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  }
  return await Axios
      .post('/api/v1/user/profile', profileData, config)
      .then((res) => { return res.data.body })
      .catch((error) => { return error })
}

// export des fonction pour les reutiliser dans les pages
export const accountService = {
  loginUser,
  logout,
  saveToken,
  getToken,
  isLogged,
  getProfile
}