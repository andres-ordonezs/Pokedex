function Pokegame(pokeList) {
  const firstHand = [];
  const secondHand = [];
  const remainingPokemons = [];
  for (let poke of pokeList) {
    remainingPokemons.push(poke);
  }
  let i = pokeList.length;
  while (i > 0) {
    const idx = Math.floor(Math.random() * remainingPokemons.length);
    if (i % 2 === 0) {
      firstHand.push(remainingPokemons[idx]);
      remainingPokemons.splice(idx, 1);
      i--;
    } else {
      secondHand.push(remainingPokemons[idx]);
      remainingPokemons.splice(idx, 1);
      i--;
    }
  }

    let sumFirstHand = 0;
    let sumSecondHand = 0;
    for (let poke of firstHand) {
      sumFirstHand += poke.base_experience;
    }

    for (let poke of secondHand) {
      sumSecondHand += poke.base_experience;
    }
    return { firstHand, secondHand, sumFirstHand, sumSecondHand };
  }


export default Pokegame;