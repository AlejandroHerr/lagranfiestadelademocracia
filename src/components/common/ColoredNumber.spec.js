import React from 'react';
import renderer from 'react-test-renderer';

import ColoredNumber from './ColoredNumber';

describe('components/component/ColoredNumber', () => {
  it('renders correctly for positive numbers', () => {
    const tree = renderer
      .create(<ColoredNumber renderComponent={props => <div {...props} />}>{1}</ColoredNumber>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders correctly for negative numbers', () => {
    const tree = renderer
      .create(<ColoredNumber renderComponent={props => <div {...props} />}>{-1}</ColoredNumber>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
