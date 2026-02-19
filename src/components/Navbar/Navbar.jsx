import React from 'react';
import { CiSearch } from 'react-icons/ci';

import * as nav from './styled';

export default function Navbar() {
  return (
    <nav.ContainerNav>
      <nav.Title>Pokedata</nav.Title>

      <nav.NavList>
        <nav.List>Ligas</nav.List>
        <nav.List>Categorias</nav.List>
        <nav.List>Tipos</nav.List>
        <nav.List>Geração</nav.List>

        <nav.SearchWrapper>
          <nav.Search placeholder="Procure" />
          <CiSearch className="searchIcon" />
        </nav.SearchWrapper>
      </nav.NavList>
    </nav.ContainerNav>
  );
}
