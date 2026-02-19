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

export const Section = styled.section`
  background: linear-gradient(to bottom, #fffff0 0%, #eaf3e4 35%, #489633 100%);
  min-height: 100vh;
  width: 100%;
  background-size: 120% 120%;
`;

export const MainContent = styled.main`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 50px auto 0;
`;

export const PokeImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => backTypes[props.mainType] || '#777'};
  width: 95%;
  height: 200px;
  border-radius: 9px;

  .imgPoke {
    width: 40%;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  height: 200px;
  border: 1px solid #252525;
  border-radius: 9px;
  padding: 10px;
`;

export const PokeName = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 19px;
  background: ${(props) => backTypes[props.mainType] || '#777'};
  color: #fffff0;
  width: 150px;
  text-align: center;
  border-radius: 12px;
`;

export const TypesWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PokeType = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 17px;
  top: 14px;
  right: 5px;
  color: #fffff0;
  transform: rotate(40deg);
  text-transform: capitalize;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    top: 0;
    right: -55px;
    background: ${(props) => backTypes[props.typeName] || '#777'};
    border: 1px solid #777;
    z-index: -10;
    height: 30px;
  }
`;

export const ContentInfo = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 17px;
`;

export const ButtonText = styled.span`
  color: white;
  font-weight: bold;
  font-size: 14px;
  opacity: 0;
  white-space: nowrap;
  transform: translateX(20px);
  transition: all 0.4s ease;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20px;
  transition: all 0.4s ease;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #fffff0;
  background: ${(props) => backTypes[props.mainType] || '#777'};
  border: 1px solid #fffff0;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding-left: 45px;

  &:hover {
    width: 130px;
    padding-left: 20px;
  }

  &:hover ${IconWrapper} {
    opacity: 0;
    transform: translateX(-30px);
  }

  &:hover ${ButtonText} {
    opacity: 1;
    transform: translateX(0);
  }
`;
