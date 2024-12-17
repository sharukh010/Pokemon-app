import React, { useEffect, useState } from 'react'
import PokemonThumbnail from './components/PokemonTumbnail'
const App = () => {
  const [allPokemons,setAllPokemons] = useState([]);
  const [loadPoke,setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async ()=>{
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next)

    function createPokemonObject(result){
      result.forEach(async (pokemon) =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
        setAllPokemons(currentList => [...currentList,data]);
      });
    }
    createPokemonObject(data.results);
  }
  useEffect(()=>{
    getAllPokemons()
  },[])
  return (
    <>
    <div className="flex bg-red-500 text-white z-100 h-12 justify-center items-center font-mono text-2xl sticky top-0">
      <h1 >Pokemon Kingdom</h1>
    </div>
    <div className="app-container h-max size-full flex items-center flex-col">

      <div className="pokemon-container h-max ">
        <div className="all-container grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 ">
          {allPokemons.map((pokemon,index)=>
          <PokemonThumbnail
          id = {pokemon.id}
          name = {pokemon.name}
          image = {pokemon.sprites.other.dream_world.front_default}
          type = {pokemon.types[0].type.name}
          key = {index}
          height= {pokemon.height}
          weight = {pokemon.weight}
          stats = {pokemon.stats}
          />
          )}
        </div>
      </div>
        <button className="load-more bg-red-500 font-mono p-2 rounded-lg text-white" onClick={()=>getAllPokemons()}>More Pokemons</button>
    </div>
    </>

  )
}

export default App
