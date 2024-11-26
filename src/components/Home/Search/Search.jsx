import React, { useContext} from "react";
import { PokemonContext } from "../../../context/PokemonContext";

const Search = () => {
  const { searchText, setSearchText, fetchPokemon } = useContext(PokemonContext);

  const handleSearch = () => {
    if (searchText.trim() === '') return;
    fetchPokemon(searchText); // Llama a la función de búsqueda del contexto
    setSearchText(''); // Limpia el campo de búsqueda
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busca tus Pokémon"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} // Actualiza el estado del texto
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Search;
