import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import axios from '../../services/axios';
import Navbar from '../../components/Navbar/Navbar';

export default function UniquePoke() {
  const { id } = useParams();

  useEffect(() => {
    async function fetchPokeDetails() {
      try {
        const responseDetail = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`,
        );
        console.log(responseDetail.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPokeDetails();
  }, [id]);

  return (
    <>
      <Navbar />
    </>
  );
}
