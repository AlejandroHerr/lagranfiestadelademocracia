import React from 'react';
import renderer from 'react-test-renderer';
import NormalText from './NormalText';

describe('components/component/NormalText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NormalText>Test Text</NormalText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
