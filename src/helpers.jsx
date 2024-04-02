function choice(pokeList) {
  console.log(pokeList);
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
  return {firstHand, secondHand};
}

function sumExp(pokeList) {
  let sum = 0;
  for (let poke of pokeList) {
    sum += poke.base_experience;
  }
  return sum;
}


export { choice, sumExp }