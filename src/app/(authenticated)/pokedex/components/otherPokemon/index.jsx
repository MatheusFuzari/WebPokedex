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
    <div>
      <div className='h-50 flex items-center justify-center'>
        <ul>
          <li>
            <p className='text-green-500'>{pokeName}</p>
          </li>
          <li>
            <p>{poke.id}</p>
          </li>
          {poke.types.map(pokemon =>(
              
              <li>
                {console.log(pokemon.type.name=='grass')}
                <div className='bg-green-400 rounded-lg w-12 text-center text-white shadow-sm shadow-green-700'><p>{pokemon.type.name}</p></div>
              </li>
            ))
          }
        </ul>
        <img className='w-60 h-60' src={`${poke.sprites.front_default}`}></img>
      </div>
      <div className='items-center flex h-50 justify-center'>
        <button className='p-3 bg-blue-500 rounded-md text-white' onClick={()=>{
          pokeId>=2 ? setPokeId(pokeId-1) : null
        }}>
          Anterior
        </button>
        <button className='p-3 bg-blue-500 rounded-md text-white mx-2' onClick={()=>{setPokeId(pokeId+1)}}>
          Próximo
        </button>
      </div>
    </div>
  )
}
