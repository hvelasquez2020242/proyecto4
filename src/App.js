import React, { useEffect, useState } from 'react'
import Cards from './components/cards'
import './App.css'

const App = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=3')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const num = Math.floor(Math.random() * 898);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="container">
      <h1 className="titulo">Pokedex</h1>
      <div className="pokemon-container">
          {allPokemons.map( (pokemonStats, index) => 
            <Cards
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
          
      </div>
    </div>
  ); 
}

export default App;