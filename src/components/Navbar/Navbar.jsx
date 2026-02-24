import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import PropTypes from 'prop-types';

import * as nav from './styled';

export default function Navbar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <nav.ContainerNav>
      <nav.Title>Pokedata</nav.Title>

      <nav.NavList>
        <nav.List>Ligas</nav.List>
        <nav.List>Categorias</nav.List>
        <nav.List>Tipos</nav.List>
        <nav.List>Geração</nav.List>

        <form onSubmit={handleSearch}>
          <nav.SearchWrapper>
            <nav.Search
              placeholder="Buscar Pokémon"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button>
              <CiSearch className="searchIcon" />
            </button>
          </nav.SearchWrapper>
        </form>
      </nav.NavList>
    </nav.ContainerNav>
  );
}

Navbar.propTypes = {
  onSearch: PropTypes.func,
};
