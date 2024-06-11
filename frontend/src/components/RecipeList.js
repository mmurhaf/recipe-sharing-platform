// src/components/RecipeList.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
