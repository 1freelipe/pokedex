import React, { useEffect } from 'react';

import Pokemons from '../../api/api';
import Navbar from '../../components/Navbar/Navbar';
import * as home from './styled';

export default function FirstPokemons() {
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Pokemons();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <home.Section />
    </>
  );
}
