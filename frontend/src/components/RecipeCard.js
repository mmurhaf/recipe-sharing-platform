// src/components/RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.instructions}</p>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
    </div>
  );
}

export default RecipeCard;
