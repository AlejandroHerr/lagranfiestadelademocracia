import React from 'react';
import renderer from 'react-test-renderer';

import PercentageText from './PercentageText';

describe('components/component/PercentageText', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PercentageText renderComponent={props => <div {...props} />}>{1}</PercentageText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
