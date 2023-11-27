export async function getPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokemons = await response.json();
  const newPokemons = pokemons.results
  for (let i = 0; i < 20; i++) {
    newPokemons[i].id = i + 1;
  }

  return pokemons?.results || [];
}