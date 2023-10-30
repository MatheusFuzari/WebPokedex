'use client';
import React, { useCallback, useEffect } from 'react';
import { getPokemonById } from '../../services/get-pokemon-by-id';
import 'tailwindcss/tailwind.css';
export default function OtherPokemon(props) {
  const [poke, setPoke] = React.useState([]);
  const [pokeId, setPokeId] = React.useState(parseInt(props.currentPoke));
  React.useEffect(()=>{
    (async () => {
      const pokemon = await getPokemonById(pokeId);
      setPoke(pokemon);
    })()
  },[pokeId])
  let pokeName = String(poke.name)
  pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  if(poke.length === 0){
    return(
      <p>Carregando...</p>
    )
  }
  return (
    <>
        <ul>
          <li>
            <p className='text-green-500'>{pokeName}</p>
            <p>{poke.id}</p>
          </li>
        </ul>
        <img className='w-60 h-60' src={`${poke.sprites.front_default}`}></img>
        <button onClick={()=>{
          pokeId>=2 ? setPokeId(pokeId-1) : null
        }}>
          Anterior
        </button>
        <button onClick={()=>{setPokeId(pokeId+1)}}>
          Próximo
        </button>
    </>
  )
}
