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

  if(poke.length === 0){
    return(
      <p>Carregando...</p>
    )
  }
  return (
    <>
        <ul>
          <li>
            <p className='text-red-500'>{poke.name}</p>
            <p>{poke.id}</p>
          </li>
          <img src={`${poke.sprites.front_default}`}></img>
        </ul>
        <button onClick={()=>{pokeId>=2 ? setPokeId(pokeId-1) : null}}>
          Anterior
        </button>
        <button onClick={()=>{setPokeId(pokeId+1)}}>
          Próximo
        </button>
    </>
  )
}
