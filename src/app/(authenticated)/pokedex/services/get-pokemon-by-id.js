export async function getPokemonById(pokemonId){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const pokemons = await response.json();
  return pokemons;
}