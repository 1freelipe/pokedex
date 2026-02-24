import React from 'react';
import PropTypes from 'prop-types';

import * as card from './styled';

export default function CardPoke({ children }) {
  return (
    <card.CardWrapper>
      <card.Pokeball />
      <card.Card>{children}</card.Card>
    </card.CardWrapper>
  );
}

CardPoke.propTypes = {
  children: PropTypes.node,
};
