export async function getPokemonSprite(page) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`);
  const pokemons = await response.json();
  const newPokemons = pokemons.results;
  let pokemonsSingle = {};
  for (let i = 0; i < 20; i++) {
    newPokemons[i].id = parseInt(page) + (i + 1);
  }
  for (let i = 0; i < 20; i++) {
    const responseSingle = await fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemons[i].id}`);
    pokemonsSingle = await responseSingle.json();
    newPokemons[i].sprites = pokemonsSingle.sprites.front_default;
  }

  return newPokemons || [];
}