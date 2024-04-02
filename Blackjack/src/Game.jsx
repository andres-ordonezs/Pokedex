import Card from "./Card";
import {choice} from "./helpers.jsx";

const CARD_NUMBERS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

const CARD_SYMBOL = ["H", "C", "D", "S"];

const CARD_SCORES = {A: 11, J: 10, Q: 10, K: 10};

function Game() {
  return (
    <div>
      <Card n={choice(CARD_NUMBERS)} s={choice(CARD_SYMBOL)} />
      <Card n={choice(CARD_NUMBERS)} s={choice(CARD_SYMBOL)} />
    </div>
  );
}

export default Game;
