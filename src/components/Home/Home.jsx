// src/pages/Home.jsx
import React from 'react';
import Search from './Search/Search';
import ListaPokemon from '../ListaPokemon/ListaPokemon';

const Home = () => {
  return (
    <div>
      <h1>Búsqueda de Pokémon</h1>
      <Search />
      <ListaPokemon />
    </div>
  );
};

export default Home;