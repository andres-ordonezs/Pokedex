import Pokecard from "./Pokecard.jsx";
import "./Pokedex.css";



/** It renders a pokecard element for each pokemon in the list.
 * Props: list of pokemons.The default value is pokeList.
 * Pokedex <= App
 */

function Pokedex({pokeList1, pokeList2, score1, score2}) {
  return (
    <div>
      <div className="Pokedex-title">
        <h2>Player 1</h2>
        <p>Score: {score1}</p>
      </div>
      <div className="Pokedex">
        {pokeList1.map((pokemon) => (
          <Pokecard
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
      <div className="Pokedex-title">
        <h2>Player 2</h2>
        <p>Score: {score2}</p>
      </div>
      <div className="Pokedex">
        {pokeList2.map((pokemon) => (
          <Pokecard
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
      <div>
        <b>{score1 > score2 ? "First Player Wins!" : "Second Player Wins!"}</b>
      </div>
    </div>
  );
}

export default Pokedex;
