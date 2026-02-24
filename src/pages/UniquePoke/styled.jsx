import styled from 'styled-components';

const backTypes = {
  grass: '#78c850',
  fire: '#f08030',
  water: '#6890f0',
  electric: '#f8d030',
  psychic: '#f85888',
  ice: '#98d8d8',
  fighting: '#c03028',
  poison: '#a040a0',
  ground: '#e0c068',
  flying: '#a890f0',
  bug: '#a8b820',
  rock: '#b8a038',
  ghost: '#705898',
  dragon: '#7038f8',
  dark: '#705848',
  steel: '#b8b8d0',
  fairy: '#ee99ac',
};

export const MainContent = styled.main`
  margin: 25px auto 0;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  gap: 50px;
  position: relative;
`;

export const ArrowReturn = styled.div`
  position: absolute;
  background: linear-gradient(
    to bottom,
    #e53935 0%,
    #e53935 48%,
    #fff 52%,
    #fff 100%
  );
  width: 40px;
  height: 40px;
  left: 0;
  top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid #000;

  .arrow {
    color: #252525;
    font-size: 22px;
  }
`;

export const PokeDiv = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokeImg = styled.img`
  width: 235px;
  height: 235px;
  border-radius: 50%;
  background: ${(props) => backTypes[props.mainType] || '#777'};
`;

export const Pokename = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-size: 37px;
  color: #fffff0;
  background: ${(props) => backTypes[props.mainType] || '#777'};
  padding: 10px;
  border-radius: 17px;
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

export const CardDescripton = styled.div`
  background: #252525;
  width: 500px;
  height: 350px;
`;

export const Description = styled.p`
  color: #fffff0;
`;
