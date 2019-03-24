import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, options, value, onChange }) => (
  <select id={name} name={name} value={value} onChange={onChange}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  value: '',
};

export default Select;
