// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';

// Define the function that renders the content in routes using State.
function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <>
      <Router>
          {/* Global Design Features */}
          <header>
            <h1>Exercise Tracker</h1>
            <h2>full-stack MERN Web App</h2>
          </header>

          <Navigation />

          <main>
            <Route path="/" exact>
              <HomePage setExerciseToEdit={setExerciseToEdit} />
            </Route>

            <Route path="/create-exercise">
              <CreateExercisePage />
            </Route>
            
            <Route path="/edit-exercise">
              <EditExercisePage exerciseToEdit={exerciseToEdit} />
            </Route>
          </main>

          <footer>
            <cite>&copy; 2022 GinWook Lee</cite>
          </footer>

      </Router>
    </>
  );
}

export default App;