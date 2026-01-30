import axios from 'axios';

// baseURL é o padrão do axios para instanciar uma URL padrão
export default axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
