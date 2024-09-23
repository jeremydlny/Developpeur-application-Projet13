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

// export des fonction pour les reutiliser dans les pages
export const accountService = {
  loginUser,
  logout,
  saveToken,
  getToken,
  isLogged
}