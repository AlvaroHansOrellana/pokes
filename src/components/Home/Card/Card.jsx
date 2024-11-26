import React from 'react';

const Card = ({ pokemon }) => {
  if (!pokemon) return null; // No renderiza nada si no hay datos

  return (
    <div className="pokemon-card">
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>ID:</strong> {pokemon.id}</p>
      <p><strong>Tipo:</strong> {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
      <div>
        <h4>Estadísticas Base:</h4>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name.toUpperCase()}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;