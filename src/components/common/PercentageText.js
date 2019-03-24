import React from 'react';
import PropTypes from 'prop-types';

import Percentage from './Percentage';
import NormalText from './NormalText';

const PercentageText = ({ children, ...props }) => (
  <Percentage renderComponent={NormalText} {...props}>
    {children}
  </Percentage>
);

PercentageText.propTypes = {
  children: PropTypes.number.isRequired,
};

export default PercentageText;
