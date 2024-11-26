import React, { createContext, useState } from 'react';

// Crear el contexto
export const PokemonContext = createContext();

// Proveedor del contexto
export const PokemonProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [pokemonList, setPokemonList] = useState([]); // Lista de Pokémon encontrados

  // Función para buscar Pokémon
  const fetchPokemon = async (query) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      const data = await response.json();
      setPokemonList((prevList) => [...prevList, data]); // Agregar el Pokémon encontrado a la lista
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <PokemonContext.Provider value={{ searchText, setSearchText, pokemonList, fetchPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};