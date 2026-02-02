import React from 'react';
import PropTypes from 'prop-types';

import * as card from './styled';

export default function CardPoke({ children }) {
  return <card.Card>{children}</card.Card>;
}

CardPoke.propTypes = {
  children: PropTypes.node,
};
