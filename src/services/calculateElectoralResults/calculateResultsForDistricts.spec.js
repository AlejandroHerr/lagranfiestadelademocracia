import rawDataLoader from '../rawDataLoader';

import calculateResultsForDistricts from './calculateResultsForDistricts';

describe('services/calculateErectoralResults/calculateResultsForDistricts', () => {
  it('should match exact snapshot for electoral district type 2', () => {
    expect(calculateResultsForDistricts(rawDataLoader.getResultsByType(2))).toMatchSnapshot();
  });
  it('should match exact snapshot for electoral district type 1', () => {
    expect(calculateResultsForDistricts(rawDataLoader.getResultsByType(1))).toMatchSnapshot();
  });
  it('should match exact snapshot for electoral district type 0', () => {
    expect(calculateResultsForDistricts(rawDataLoader.getResultsByType(0))).toMatchSnapshot();
  });
});
