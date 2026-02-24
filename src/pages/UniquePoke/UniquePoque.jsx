import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { LuArrowLeftFromLine } from 'react-icons/lu';

import axios from '../../services/axios';
import Navbar from '../../components/Navbar/Navbar';
import DetailCard from '../../components/DetailCard/Detailcard';
import { Section } from '../FirstPokemons/styled';
import * as unique from './styled';

export default function UniquePoke() {
  const [pokeDetails, setPokeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  // const handleReturn = () => {
  //   navigate('/pokedex');
  // };

  useEffect(() => {
    async function fetchPokeDetails() {
      try {
        const responseDetail = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
        );
        console.log(responseDetail.data);
        setPokeDetails(responseDetail.data);
      } catch (error) {
        console.log('Erro ao buscar detalhes', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokeDetails();
  }, [id]);

  if (loading) {
    return <h1>Aguarde...</h1>;
  }

  if (!pokeDetails) {
    return <h1>Pokemon não encontrado!</h1>;
  }

  const firstType = pokeDetails.types[0].type.name;
  const capitalize = (str) => {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Navbar />
      <Section>
        <unique.MainContent>
          <unique.ArrowReturn onClick={() => navigate(-1)}>
            <LuArrowLeftFromLine className="arrow" />
          </unique.ArrowReturn>
          <unique.DivWrapper>
            <unique.PokeDiv>
              <unique.PokeImg
                mainType={firstType}
                src={
                  pokeDetails.sprites.other['official-artwork'].front_default
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
        </unique.MainContent>
      </Section>
    </>
  );
}
