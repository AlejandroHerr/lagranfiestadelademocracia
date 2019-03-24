import React from 'react';
import PropTypes from 'prop-types';

import { formatPercentage } from '../../utils/format';

const Percentage = ({ children, renderComponent: RenderComponent, ...props }) => (
  <RenderComponent {...props}>{`${formatPercentage(children).toString()}%`}</RenderComponent>
);

Percentage.propTypes = {
  children: PropTypes.number.isRequired,
  renderComponent: PropTypes.func.isRequired,
};

export default Percentage;
