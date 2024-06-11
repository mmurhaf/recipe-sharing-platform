// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your backend URL

// Get all recipes
export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

// Get a single recipe by ID
export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
};

// Create a new recipe
export const createRecipe = async (recipe) => {
  try {
    const response = await axios.post(`${API_URL}/recipes`, recipe);
    return response.data;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
};

// Update an existing recipe
export const updateRecipe = async (id, recipe) => {
  try {
    const response = await axios.patch(`${API_URL}/recipes/${id}`, recipe);
    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
};

// Delete a recipe
export const deleteRecipe = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};

// User signup
export const signupUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, user);
    return response.data;
  } catch (error) {
    console.error('Error signing up user:', error);
    throw error;
  }
};

// User signin
export const signinUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users/signin`, user);
    return response.data;
  } catch (error) {
    console.error('Error signing in user:', error);
    throw error;
  }
};

// Get all users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Get a single user by ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Update an existing user
export const updateUser = async (id, user) => {
  try {
    const response = await axios.patch(`${API_URL}/users/${id}`, user);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
