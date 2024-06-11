// src/pages/RecipeDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../services/api';
import RecipeCard from '../components/RecipeCard';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  return (
    <div>
      {recipe ? (
        <div>
          <h1>{recipe.title}</h1>
          <RecipeCard recipe={recipe} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RecipeDetails;
