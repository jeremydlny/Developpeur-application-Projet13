/** Import des modules nécessaires */
import axios from 'axios'
import { accountService } from './accountService.js'

const Axios = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
})

/**
 * Interceptor pour injection token
 */
Axios.interceptors.request.use(request => {

    // Si connecté on ajoute le token dans l'entête
    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }

    return request
})

/**
 * Interceptor des réponses de l'API
 */
Axios.interceptors.response.use(response => {
    return response
}, error => {

    if (error.response.status === 401) {
        accountService.logout()
        window.location.reload()
    }
})

export default Axios