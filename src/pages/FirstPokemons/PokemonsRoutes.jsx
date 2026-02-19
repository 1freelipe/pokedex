import { Route, Routes, Navigate } from 'react-router';

import FirstPokemons from './Firstpokemons';
import UniquePoke from '../UniquePoke/UniquePoque';

export default function PokemonsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokedex" replace />} />
      <Route path="/pokedex" element={<FirstPokemons />} />
      <Route path="/unique-poke" element={<UniquePoke />} />
    </Routes>
  );
}
