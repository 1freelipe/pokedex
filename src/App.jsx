import React, { useEffect } from 'react';
import axios from './services/axios';

function App() {
  async function getPokemons() {
    const pokeData = await axios.get('pokemon?limit=10&offset=0');

    return pokeData;
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return <h1>Hello World</h1>;
}

export default App;
