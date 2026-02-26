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
  black: '#5E94A8',
};

export const MainContent = styled.main`
  margin: 25px auto 0;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const PokeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 100px;
`;

export const DivPoke = styled.img`
  width: 350px;
  height: 300px;
`;

export const CardDescripton = styled.div`
  background: #fffff0;
  opacity: 0.9;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid ${(props) => backTypes[props.mainType] || '#777'};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: -12px;
    left: 50%;
    transform: translate(-50%);
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid ${(props) => backTypes[props.mainType] || '#777'};
  }
`;

export const Description = styled.p`
  color: #fffff0;
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;

  &.description {
    color: #252525;
  }

  &.title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const PokeImgCardWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -15px;
  right: -15px;
  z-index: 100;
`;

export const PokeImgCard = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: ${(props) => backTypes[props.mainType] || '#777'};
`;

export const CardsWrapper = styled.div`
  width: 95%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 28px;
  position: relative;
  padding: 20px;
  background: ${(props) => backTypes[props.mainType] || '#777'};
  border-radius: 17px;
  backdrop-filter: blur(2px);
  gap: 20px;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const CardDetailsPoke = styled.div`
  border: 1px solid #fffff0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 14px;
  margin-top: 15px;
`;

export const TitleDescriptions = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Pokeball = styled.div`
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #e53935 0%,
    #e53935 48%,
    #000 48%,
    #000 52%,
    #fff 52%,
    #fff 100%
  );
  border: 3px solid #000;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 9px;
    height: 9px;
    background: #fff;
    border: 2px solid #000;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;
