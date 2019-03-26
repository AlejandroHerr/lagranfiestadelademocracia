import getIndexOfMax from '../../utils/getIndexOfMax';
import updateImmutableArray from '../../utils/updateImmutableArray';

export default quotientCalculator => (results, totalSeats) =>
  Array.from(Array(totalSeats).keys()).reduce(distribution => {
    const seatCost = distribution.map(quotientCalculator);
    const seatWinner = getIndexOfMax(seatCost);

    if (seatWinner === -1) {
      return distribution;
    }

    return updateImmutableArray(distribution, seatWinner, party => ({
      ...party,
      seats: party.seats + 1,
    }));
  }, results.map(result => ({ ...result })));
