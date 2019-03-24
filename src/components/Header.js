import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'rebass';

const Header = ({ siteTitle }) => (
  <Box>
    <Heading fontFamily="Oswald">{siteTitle}</Heading>
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
