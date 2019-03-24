import React from 'react';
import PropTypes from 'prop-types';

import ColoredNumber from './ColoredNumber';
import PercentageText from './PercentageText';

const ColoredPercentageText = ({ children, ...props }) => (
  <ColoredNumber renderComponent={PercentageText} {...props}>
    {children}
  </ColoredNumber>
);

ColoredPercentageText.propTypes = {
  children: PropTypes.number.isRequired,
};

export default ColoredPercentageText;
