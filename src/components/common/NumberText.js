import React from 'react';
import PropTypes from 'prop-types';

import { formatDecimal } from '../../utils/format';

import NormalText from './NormalText';

const NumberText = ({ children, decimals, ...props }) => (
  <NormalText {...props}>{formatDecimal(children, decimals).toString()}</NormalText>
);

NumberText.propTypes = {
  children: PropTypes.number.isRequired,
  decimals: PropTypes.number,
};

NumberText.defaultProps = {
  decimals: 0,
};

export default NumberText;
