// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import { getRecipes } from '../services/api';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default Home;
