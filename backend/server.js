// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const recipeRouter = require('./routes/recipes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Use cors middleware

mongoose.connect('mongodb+srv://mango_user1:mango_user1@mern.bxwefo7.mongodb.net/recipe-sharing?retryWrites=true&w=majority&appName=MERN', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/recipes', recipeRouter);
app.use('/users', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
