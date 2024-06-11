// src/components/RecipeForm.js
import React, { useState, useEffect } from 'react';

const RecipeForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    image: '',
    ...initialData
  });

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, ...initialData }));
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label>Ingredients:</label>
      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
      ></textarea>
      <label>Instructions:</label>
      <textarea
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
      ></textarea>
      <label>Image URL:</label>
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecipeForm;
