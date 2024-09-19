import axios from 'axios';

// Base URL du backend
const API_URL = 'http://localhost:3001/api/user';

// Fonction pour créer un nouvel utilisateur (signup)
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l’inscription :', error);
    throw error;
  }
};

// Fonction pour la connexion (login)
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    throw error;
  }
};

// Fonction pour récupérer le profil utilisateur
export const getProfile = async (token) => {
  try {
    const response = await axios.post(
      `${API_URL}/profile`, 
      {}, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil :', error);
    throw error;
  }
};

// Fonction pour mettre à jour le profil utilisateur
export const updateProfile = async (token, updatedData) => {
  try {
    const response = await axios.put(
      `${API_URL}/profile`, 
      updatedData, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil :', error);
    throw error;
  }
};