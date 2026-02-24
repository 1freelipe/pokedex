import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

import Pokemons from '../../api/api';
import Navbar from '../../components/Navbar/Navbar';
import CardPoke from '../../components/CardPoke/Cardpoke';
import * as home from './styled';
import LoadingSkeleton from '../../components/Skeleton/Skeleton';

export default function FirstPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 12;
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/unique-poke/${id}`);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const offset = (page - 1) * limit;

        const data = await Pokemons(limit, offset);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log(data);
        setPokemons(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  const capitalize = (str) => {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Navbar />
      <home.Section>
        <home.MainContent>
          {loading
            ? // BLOCO DE LOADING
              Array.from({ length: 12 }).map((_, index) => (
                <LoadingSkeleton key={index} />
              ))
            : // BLOCO DE CONTEÚDO (MAP)
              pokemons.map((poke, key) => {
                const firstType = poke.types[0].type.name;
                const hp = poke.stats[0].base_stat;
                const attack = poke.stats[1].base_stat;

                return (
                  <CardPoke key={key} mainType={firstType}>
                    <home.TypesWrapper>
                      {poke.types.map((t, index) => (
                        <home.PokeType key={index} typeName={t.type.name}>
                          {t.type.name}
                        </home.PokeType>
                      ))}
                    </home.TypesWrapper>

                    <home.PokeImg mainType={firstType}>
                      <img
                        src={
                          poke.sprites.versions['generation-v']['black-white']
                            .animated.front_default ||
                          poke.sprites.front_default
                        }
                        className="imgPoke"
                        alt={poke.name}
                      />
                    </home.PokeImg>

                    <home.PokeName mainType={firstType}>
                      {capitalize(poke.name)}
                    </home.PokeName>

                    <home.ContentWrapper mainType={firstType}>
                      <home.ContentInfo>Peso: {poke.weight}kg</home.ContentInfo>
                      <home.ContentInfo>
                        Tamanho: {poke.height}
                        {poke.height < 10 ? 'cm' : 'm'}
                      </home.ContentInfo>
                      <home.ContentInfo>HP Max: {hp}</home.ContentInfo>
                      <home.ContentInfo>Ataque Max: {attack}</home.ContentInfo>
                    </home.ContentWrapper>

                    <home.ButtonWrapper>
                      <home.Button
                        mainType={firstType}
                        onClick={() => handleNavigate(poke.id)}
                      >
                        <home.IconWrapper>
                          <FaArrowRightFromBracket />
                        </home.IconWrapper>
                        <home.ButtonText>Ver Detalhes</home.ButtonText>
                      </home.Button>
                    </home.ButtonWrapper>
                  </CardPoke>
                );
              })}
        </home.MainContent>

        <home.PaginationWrapper>
          <button onClick={handlePrevPage} disabled={page === 1 || loading}>
            Anterior
          </button>

          <span>Pagina {page}</span>

          <button onClick={handleNextPage} disabled={loading}>
            Próxima
          </button>
        </home.PaginationWrapper>
      </home.Section>
    </>
  );
}
