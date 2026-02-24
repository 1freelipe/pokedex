import React from 'react';
import PropTypes from 'prop-types';

import * as detail from './styled';

export default function DetailCard({ children }) {
  return <detail.Detailcard>{children}</detail.Detailcard>;
}

DetailCard.propTypes = {
  children: PropTypes.node,
};
