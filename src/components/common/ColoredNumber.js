import React from 'react';
import PropTypes from 'prop-types';

const ColoredNumber = ({ children, negativeColor, positiveColor, renderComponent: RenderComponent, ...props }) => (
  <RenderComponent {...props} color={children < 0 ? negativeColor : positiveColor}>
    {children}
  </RenderComponent>
);

ColoredNumber.propTypes = {
  children: PropTypes.number.isRequired,
  negativeColor: PropTypes.string,
  positiveColor: PropTypes.string,
  renderComponent: PropTypes.func.isRequired,
};

ColoredNumber.defaultProps = {
  negativeColor: 'red',
  positiveColor: 'normal',
};

export default ColoredNumber;
