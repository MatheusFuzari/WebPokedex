'use client';
import React, { useCallback, useEffect } from 'react';
import { getPokemonById } from '../../services/get-pokemon-by-id';
import 'tailwindcss/tailwind.css';
export default function OtherPokemon(props) {
  const [poke, setPoke] = React.useState([]);
  const [pokeId, setPokeId] = React.useState(parseInt(props.currentPoke));
  React.useEffect(() => {
    (async () => {
      const pokemon = await getPokemonById(pokeId);
      setPoke(pokemon);
    })()
  }, [pokeId])
  let pokeName = String(poke.name)
  pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  if (poke.length === 0) {
    return (
      <p>Carregando...</p>
    )
  }
  return (
    <div>
      <div className='h-[32rem] w-full mt-32 bg-gradient-to-bl from-slate-50 to-slate-200'>
        <img className='absolute left-1/2 -translate-x-1/2' src='../static/images/gbaTemplateAAA.png'></img>
        <div className='z-10 absolute left-3/4 top-1/3 -translate-x-52 translate-y-1/3 w-32 h-32'>
          <button className='p-2 w-10 h-10 bg-white rounded-full text-black absolute bottom-3' onClick={() => {
            pokeId >= 2 ? setPokeId(pokeId - 1) : null
          }}>
            A
          </button>
          <button className='p-2 w-10 h-10 bg-white rounded-full text-black absolute right-2.5 bottom-11' onClick={() => { setPokeId(pokeId + 1) }}>
            B
          </button>
        </div>
        <div className='h-60 flex items-center justify-center translate-y-1/2'>
          <img className='w-60 h-60' src={`${poke.sprites.front_default}`}></img>
          <p className='text-white z-30 -bottom-10 font-bold text-lg absolute'>{pokeName}&nbsp;&nbsp;&nbsp;<span className='text-gray-500 z-30'>N° {poke.id}</span></p>
        </div>
      </div>
    </div>
  )
}
