import rawDataLoader from '../rawDataLoader';

import calculateResultsForDistricts from './calculateResultsForDistricts';
import calculateResultsForParentRegion from './calculateResultsForParentRegion';

describe('services/calculateElectoralResults/calculateResultsForParentRegion', () => {
  it('should match exact snapshot for electoral district type 2', () => {
    expect(
      calculateResultsForParentRegion(
        calculateResultsForDistricts(rawDataLoader.getResultsByType(2)),
        rawDataLoader.getRegions(),
      ),
    ).toMatchSnapshot();
  });
});
