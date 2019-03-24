import React from 'react';
import renderer from 'react-test-renderer';

import Percentage from './Percentage';

describe('components/component/Percentage', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Percentage renderComponent={props => <div {...props} />}>{0.001}</Percentage>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
