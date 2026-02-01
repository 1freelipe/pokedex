import axios from '../services/axios';

export default async function Pokemons() {
  try {
    const endpoints = [];
    let i = 0;
    for (i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    const promises = endpoints.map((endpoint) => axios.get(endpoint));
    const responses = await Promise.all(promises);
    const allPokeData = responses.map((res) => res.data);

    return allPokeData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
