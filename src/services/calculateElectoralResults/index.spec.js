import rawDataLoader from '../rawDataLoader';

import calculateElectoralResults from '.';

describe('src/services/calculateElectoralResults', () => {
  describe('results for CCAA', () => {
    it('should match results for PP', () => {
      const total = calculateElectoralResults(rawDataLoader.getResultsByType(2), rawDataLoader.getRegions());
      expect(
        total[1].map(resultForCcaa => {
          const { seats } = resultForCcaa.resultsByParty.find(({ id }) => id === 68);
          const { alias } = resultForCcaa.regionData;

          return [alias, seats];
        }),
      ).toEqual([
        ['andalucia', 23],
        ['aragon', 6],
        ['principado de asturias', 3],
        ['illes balears', 3],
        ['canarias', 6],
        ['cantabria', 2],
        ['castilla _ la mancha', 12],
        ['castilla y leon', 18],
        ['catalunya', 6],
        ['extremadura', 5],
        ['galicia', 12],
        ['comunidad de madrid', 15],
        ['comunidad foral de navarra', 2],
        ['pais vasco', 2],
        ['region de murcia', 5],
        ['la rioja', 2],
        ['comunitat valenciana', 13],
        ['ciudad de ceuta', 1],
        ['ciudad de melilla', 1],
      ]);
    });
    it('should match results for PSOE', () => {
      const total = calculateElectoralResults(rawDataLoader.getResultsByType(2), rawDataLoader.getRegions());
      expect(
        total[1].map(resultForCcaa => {
          const { seats } = resultForCcaa.resultsByParty.find(({ id }) => id === 77);
          const { alias } = resultForCcaa.regionData;

          return [alias, seats];
        }),
      ).toEqual([
        ['andalucia', 20],
        ['aragon', 4],
        ['principado de asturias', 2],
        ['illes balears', 2],
        ['canarias', 3],
        ['cantabria', 1],
        ['castilla _ la mancha', 7],
        ['castilla y leon', 9],
        ['catalunya', 7],
        ['extremadura', 4],
        ['galicia', 6],
        ['comunidad de madrid', 7],
        ['comunidad foral de navarra', 1],
        ['pais vasco', 3],
        ['region de murcia', 2],
        ['la rioja', 1],
        ['comunitat valenciana', 6],
        ['ciudad de ceuta', 0],
        ['ciudad de melilla', 0],
      ]);
    });
  });
  it('should match exact snapshot for electoral district type 2', () => {
    const total = calculateElectoralResults(rawDataLoader.getResultsByType(2), rawDataLoader.getRegions());
    expect(total).toMatchSnapshot();
  });
});
