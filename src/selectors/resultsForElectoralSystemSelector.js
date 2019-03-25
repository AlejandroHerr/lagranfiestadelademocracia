import createCachedSelector from 're-reselect';

import calculateElectoralResults from '../services/calculateElectoralResults';

const resultsForElectoralSystemSelector = createCachedSelector(
  ({ data }) => data.results,
  ({ data }) => data.regions,
  ({ electoralSystem }) => electoralSystem.electoralDistrictType,
  ({ electoralSystem }) => electoralSystem.allocationMethod,
  ({ electoralSystem }) => electoralSystem.minThreshold,
  (results, regions, electoralDistrictType, allocationMethod, minThreshold) =>
    calculateElectoralResults(results, regions, { electoralDistrictType, allocationMethod, minThreshold }),
)(({ electoralSystem }) => {
  const { electoralDistrictType, allocationMethod, minThreshold } = electoralSystem;

  return `${electoralDistrictType}-${allocationMethod}-${minThreshold}`;
});

export default resultsForElectoralSystemSelector;
