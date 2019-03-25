import rawDataLoader from '../rawDataLoader';

import aggregateResults from './aggregateResults';

const results = rawDataLoader.getResultsByType(0);

const prepareResult = result => ({
  ...result,
  resultsByParty: result.resultsByParty.map((resultForParty, idx) => ({
    ...resultForParty,
    seats: idx + 1,
  })),
});

describe('services/calculateErectoralResults/helpers', () => {
  it('should match exact snapshot', () => {
    expect(aggregateResults(prepareResult(results[0]), prepareResult(results[results.length - 1]))).toMatchSnapshot();
  });
});
