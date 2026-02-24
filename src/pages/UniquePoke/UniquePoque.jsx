import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { LuArrowLeftFromLine } from 'react-icons/lu';

import axios from '../../services/axios';
import Navbar from '../../components/Navbar/Navbar';
import DetailCard from '../../components/DetailCard/Detailcard';
import { Section } from '../FirstPokemons/styled';
import * as unique from './styled';
import LoadingSkeleton from '../../components/Skeleton/Skeleton';

export default function UniquePoke() {
  const [pokeDetails, setPokeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pokeDescription, setPokeDescription] = useState(null);
  const [pokeSpecies, setPokeSpecies] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPokeDetails() {
      try {
        // Resolvendo as duas promises de uma vez, disparando as duas requisições conjuntas
        const [responseDetail, pokeDetails] = await Promise.all([
          axios.get(`pokemon/${id}`),
          axios.get(`pokemon-species/${id}`),
        ]);
        console.log(responseDetail.data);
        console.log(pokeDetails.data);
        // Setando o data do pokemon que está vindo na URL
        setPokeDetails(responseDetail.data);
        // Setando toda a descrição de cada pokemon
        setPokeSpecies(pokeDetails.data);

        // Capturando apenas o texto que possui como linguagen "en"
        const flavorTextEntry = pokeDetails.data.flavor_text_entries.find(
          (entry) => entry.language.name === 'en',
        );
        if (flavorTextEntry) {
          // Criando uma função para limpar o texto das quebras de linha que vem junto com a API
          const cleanText = flavorTextEntry.flavor_text.replace(/[\n\f]/g, '');
          // Setando apenas a descrição de cada pokemon (a lore)
          setPokeDescription(cleanText);
        }
      } catch (error) {
        console.log('Erro ao buscar detalhes', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokeDetails();
  }, [id]);

  // Só irá executar se não estiver em loading e se o pokemon não for encontrado
  if (!loading && !pokeDetails) {
    return <h1>Pokemon não encontrado!</h1>;
  }

  // Evitando a quebra do loading, ele só vai buscar o firstType do pokemon, quando o useEffect terminar
  const firstType = pokeDetails ? pokeDetails.types[0].type.name : '';
  const capitalize = (str) => {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Navbar />
      <Section>
        <unique.MainContent>
          {loading ? (
            Array.from({ length: 1 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          ) : (
            <>
              <unique.ArrowReturn onClick={() => navigate(-1)}>
                <LuArrowLeftFromLine className="arrow" />
              </unique.ArrowReturn>
              <unique.DivWrapper>
                <unique.PokeDiv>
                  <unique.PokeImg
                    mainType={firstType}
                    src={
                      pokeDetails.sprites.other['official-artwork']
                        .front_default
                    }
                    width="200px"
                    alt={pokeDetails.name}
                  />
                </unique.PokeDiv>
                <unique.Pokename mainType={firstType}>
                  {capitalize(pokeDetails.name)}
                </unique.Pokename>
              </unique.DivWrapper>
              <DetailCard></DetailCard>
            </>
          )}
        </unique.MainContent>
        <unique.CardDescripton>
          <unique.Description>{pokeDescription}</unique.Description>
          <unique.Description>{pokeSpecies.color.name}</unique.Description>
        </unique.CardDescripton>
      </Section>
    </>
  );
}
