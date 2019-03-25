/* eslint-disable import/prefer-default-export */
export const filterPartiesUnderThreshold = (results, validVotes, minThreshold) =>
  results.filter(({ votes }) => (votes / validVotes) * 100 >= minThreshold);
