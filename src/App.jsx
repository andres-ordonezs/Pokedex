import Pokedex from "./Pokedex.jsx";
import Pokegame from "./Pokegame.jsx";
import "./App.css";


/*
1. What the component is doing
2. props: any props
3. Who is my parent - do I have any children?
 */

const DEFAULT_POKELIST = [
  {id: 4, name: "Charmander", type: "fire", base_experience: 62},
  {id: 7, name: "Squirtle", type: "water", base_experience: 63},
  {id: 11, name: "Metapod", type: "bug", base_experience: 72},
  {id: 12, name: "Butterfree", type: "flying", base_experience: 178},
  {id: 25, name: "Pikachu", type: "electric", base_experience: 112},
  {id: 39, name: "Jigglypuff", type: "normal", base_experience: 95},
  {id: 94, name: "Gengar", type: "poison", base_experience: 225},
  {id: 133, name: "Eevee", type: "normal", base_experience: 65},
];

const { firstHand, secondHand, sumFirstHand, sumSecondHand } = Pokegame(DEFAULT_POKELIST);



/** It renders pokedex elements.
 * App => Pokedex
 */
function App() {
  return (
    <div>
      <Pokedex pokeList1={firstHand} pokeList2={secondHand} score1={sumFirstHand} score2={sumSecondHand}/>
    </div>
  );
}

export default App;
