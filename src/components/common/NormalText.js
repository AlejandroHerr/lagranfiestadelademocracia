import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass';

const NormalText = ({ children, ...props }) => (
  <Text fontFamily="body" {...props}>
    {children}
  </Text>
);

NormalText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default NormalText;
