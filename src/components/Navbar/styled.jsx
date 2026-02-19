import styled from 'styled-components';

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  padding: 10px;
  width: 90%;
  background: #ececec;
  border-radius: 9px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 40px;
  font-family: 'Tektur', sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
  color: #ffcb05;
  -webkit-text-stroke: 2px #2a75bb;
  text-shadow:
    -1px -1px 0 #2a75bb,
    1px -1px 0 #2a75bb,
    -1px 1px 0 #2a75bb,
    1px 1px 0 #2a75bb;
  display: block;
  transform: rotate(-11deg) translateX(10%);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 5px;
    background: #2a75bb;
    width: 100%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #2a75bb;
  font-size: 19px;
  position: relative;
  text-transform: uppercase;
  cursor: pointer;

  &::after {
    content: '';
    height: 2px;
    width: 0%;
    bottom: 0;
    background: #ffcb05;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Search = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 2px solid #2a75bb;
  width: 300px;
  border-radius: 12px;
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #ffcb05;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;

  .searchIcon {
    cursor: pointer;
    position: absolute;
    right: 20px;
    font-size: 20px;
  }
`;
