import React from 'react';
import renderer from 'react-test-renderer';

import ColoredPercentageText from './ColoredPercentageText';

describe('components/component/ColoredPercentageText', () => {
  it('renders correctly for positive numbers', () => {
    const tree = renderer.create(<ColoredPercentageText>{1}</ColoredPercentageText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders correctly for negative numbers', () => {
    const tree = renderer.create(<ColoredPercentageText>{-0.001}</ColoredPercentageText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
