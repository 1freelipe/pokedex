import axios from '../services/axios';

export default async function Pokemons() {
  try {
    // Criando um array vazio
    const endpoints = [];
    let i = 0;
    // Alimentando o array com os diferentes endpoints, dependendo do número máximo no breakpoint
    for (i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    // Criando uma constante que vai mapear todos os endpoints do array já alimentado e utilizando o .get do axios
    const promises = endpoints.map((endpoint) => axios.get(endpoint));
    // Resolvendo todas as promises de uma vez e não uma por uma
    const responses = await Promise.all(promises);
    // Capturando o resultado de todas as promises resolvidas de uma vez e distribuindo no componente. Apenas o res.data da API inteira.
    const allPokeData = responses.map((res) => res.data);

    // Simulando um delay na promise para testar a tela de loading
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return allPokeData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
