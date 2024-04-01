import "./Pokecard.css";
// TODO: Docstrings
//TODO: Add a global constant for pokemon API endpiece
function Pokecard({name, id, type, exp}) {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
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
