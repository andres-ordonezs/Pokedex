import "./Pokecard.css";

const IMAGE_API_ENDPOINT = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** It renders a card for a pokemon.
 * Props: name, id, type, exp.
 * Pokecard <= Pokedex
 */

function Pokecard({name, id, type, exp}) {
  const image = `${IMAGE_API_ENDPOINT}${id}.png`;
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-title">{name}</h3>
      <img src={image} className="Pokecard-img" />
      <p className="Pokecard-type">{type}</p>
      <p className="Pokecard-exp">EXP: {exp}</p>
    </div>
  );
}

export default Pokecard;
