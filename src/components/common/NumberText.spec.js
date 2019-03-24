import React from 'react';
import renderer from 'react-test-renderer';

import NumberText from './NumberText';

describe('components/component/NumberText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NumberText>{1 + 1 / 3}</NumberText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with decimales', () => {
    const tree = renderer.create(<NumberText decimals={7}>{1 + 1 / 3}</NumberText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
