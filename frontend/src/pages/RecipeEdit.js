// src/pages/RecipeEdit.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';
import { getRecipeById, updateRecipe } from '../services/api';

const RecipeEdit = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        setInitialData(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const updatedRecipe = await updateRecipe(id, formData);
      console.log('Recipe updated:', updatedRecipe);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Edit Recipe</h1>
      {initialData ? (
        <RecipeForm onSubmit={handleSubmit} initialData={initialData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RecipeEdit;
