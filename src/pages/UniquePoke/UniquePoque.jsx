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
        const [responseDetail, pokeSpeciesDetails] = await Promise.all([
          axios.get(`pokemon/${id}`),
          axios.get(`pokemon-species/${id}`),
        ]);
        console.log(responseDetail.data);
        console.log(pokeSpeciesDetails.data);
        // Setando o data do pokemon que está vindo na URL
        setPokeDetails(responseDetail.data);
        // Setando toda a descrição de cada pokemon
        setPokeSpecies(pokeSpeciesDetails.data);

        // Capturando apenas o texto que possui como linguagen "en"
        const flavorTextEntry =
          pokeSpeciesDetails.data.flavor_text_entries.find(
            (entry) => entry.language.name === 'en',
          );
        if (flavorTextEntry) {
          // Criando uma função para limpar o texto das quebras de linha que vem junto com a API
          const cleanText = flavorTextEntry.flavor_text.replace(/[\n\f]/g, ' ');
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
  if (!loading && !pokeDetails && !pokeSpecies) {
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
        {loading ? (
          Array.from({ length: 1 }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))
        ) : (
          <>
            <unique.MainContent>
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
              <DetailCard>
                <unique.CardDescripton mainType={firstType}>
                  <unique.Description className="description">
                    {pokeDescription}
                  </unique.Description>
                </unique.CardDescripton>
                <unique.PokeWrapper>
                  <unique.DivPoke
                    src={pokeDetails.sprites.other['dream_world'].front_default}
                  />
                </unique.PokeWrapper>
              </DetailCard>
            </unique.MainContent>

            <unique.CardsWrapper mainType={firstType}>
              <unique.Description className="title">
                Informations
              </unique.Description>
              <unique.Pokeball />

              <unique.PokeImgCardWrapper>
                <unique.PokeImgCard
                  mainType={firstType}
                  src={
                    pokeDetails.sprites.versions['generation-v']['black-white']
                      .animated.front_default
                  }
                />
              </unique.PokeImgCardWrapper>

              <unique.CardDetailsPoke colorName={pokeSpecies.color.name}>
                <unique.TitleDescriptions>
                  <unique.Description>Color</unique.Description>
                </unique.TitleDescriptions>
                <unique.Description>
                  {capitalize(pokeSpecies.color.name)}
                </unique.Description>
              </unique.CardDetailsPoke>
              <unique.CardDetailsPoke>
                <unique.TitleDescriptions>
                  <unique.Description>Habitat</unique.Description>
                </unique.TitleDescriptions>
                <unique.Description>
                  {capitalize(pokeSpecies.habitat.name)}
                </unique.Description>
              </unique.CardDetailsPoke>
              <unique.CardDetailsPoke>
                <unique.TitleDescriptions>
                  <unique.Description>Capture Rate</unique.Description>
                </unique.TitleDescriptions>
                <unique.Description>
                  {`${pokeSpecies.capture_rate}%`}
                </unique.Description>
              </unique.CardDetailsPoke>
              <unique.CardDetailsPoke>
                <unique.TitleDescriptions>
                  <unique.Description>Legendary Pokemon</unique.Description>
                </unique.TitleDescriptions>
                <unique.Description>
                  {pokeSpecies?.is_legendary === false ? 'No' : 'Yes'}
                </unique.Description>
              </unique.CardDetailsPoke>
              <unique.CardDetailsPoke>
                <unique.TitleDescriptions>
                  <unique.Description>Evolves From</unique.Description>
                </unique.TitleDescriptions>
                <unique.Description>
                  {capitalize(
                    pokeSpecies?.evolves_from_species
                      ? pokeSpecies.evolves_from_species.name
                      : 'No evolves',
                  )}
                </unique.Description>
              </unique.CardDetailsPoke>
              <unique.CardDetailsPoke>
                <unique.TitleDescriptions>
                  <unique.Description>Shape</unique.Description>
                </unique.TitleDescriptions>
                <unique.Description>
                  {capitalize(pokeSpecies?.shape?.name)}
                </unique.Description>
              </unique.CardDetailsPoke>
            </unique.CardsWrapper>
          </>
        )}
      </Section>
    </>
  );
}
