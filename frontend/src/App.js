// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import RecipeCreate from './pages/RecipeCreate';
import RecipeEdit from './pages/RecipeEdit';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes/:id" component={RecipeDetails} />
          <Route path="/create" component={RecipeCreate} />
          <Route path="/edit/:id" component={RecipeEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
