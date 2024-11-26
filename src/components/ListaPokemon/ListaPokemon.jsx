import React, { useContext, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import Card from '../Home/Card/Card';

const ListaPokemon = () => {
  const { pokemonList } = useContext(PokemonContext);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 3;

  const totalPages = Math.ceil(pokemonList.length / pokemonsPerPage);

  const currentPokemons = pokemonList.slice(
    (currentPage - 1) * pokemonsPerPage,
    currentPage * pokemonsPerPage
  );

  const changePage = (direction) => {
    setCurrentPage((prev) =>
      direction === 'next'
        ? Math.min(prev + 1, totalPages)
        : Math.max(prev - 1, 1)
    );
  };

  return (
    <div>
      <div className="pokemon-list">
        {currentPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={() => changePage('prev')} disabled={currentPage === 1}>
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => changePage('next')}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ListaPokemon;