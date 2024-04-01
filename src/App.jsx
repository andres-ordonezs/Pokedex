import Pokedex from "./Pokedex.jsx";
import "./App.css";

// TODO: Docstring
/*
1. What the component is doing
2. props: any props
3. Who is my parent - do I have any children?
 */
function App() {
  return (
    <div>
      <Pokedex />
      <Pokedex
        pokeList={[
          {id: "10", name: "Charmander", type: "fire", base_experience: 62},
        ]}
      />
    </div>
  );
}

export default App;
