import styled from 'styled-components';

export const Card = styled.div`
  background: #ececec;
  width: 350px;
  height: 450px;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  padding: 10px;
  gap: 10px;
  box-shadow: 6px 8px 12px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Pokeball = styled.div`
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 44px;
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
    width: 12px;
    height: 12px;
    background: #fff;
    border: 3px solid #000;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  width: 350px;
  height: 450px;

  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 20px;
    background: linear-gradient(
      to bottom,
      #e53935 0%,
      #e53935 45%,
      #000 45%,
      #000 55%,
      #fff 55%,
      #fff 100%
    );
    z-index: 0;
  }
`;
