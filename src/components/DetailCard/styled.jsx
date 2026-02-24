import styled from 'styled-components';
import backImage from '../../images/background.png';

export const Detailcard = styled.div`
  width: 1700px;
  height: 750px;
  background-image: url(${backImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  padding: 10px;
`;
