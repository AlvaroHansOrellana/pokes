import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PokemonProvider } from './context/PokemonContext';
import Home from './components/Home/Home'
import './App.css'


const App = () => {
  return (
    <PokemonProvider>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </PokemonProvider>
  );
};

export default App;