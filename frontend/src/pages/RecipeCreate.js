// src/pages/RecipeCreate.js
import React from 'react';
import RecipeForm from '../components/RecipeForm';
import { createRecipe } from '../services/api';

const RecipeCreate = () => {
  const handleSubmit = async (formData) => {
    try {
      const newRecipe = await createRecipe(formData);
      console.log('Recipe created:', newRecipe);
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Create Recipe</h1>
      <RecipeForm onSubmit={handleSubmit} />
    </div>
  );
}

export default RecipeCreate;
