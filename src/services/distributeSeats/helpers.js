import calculateDistortion from '../../utils/calculateDistortion';

export const addPercVotesAndSeats = (results, { valids }) =>
  results.map(result => ({
    ...result,
    percVotes: result.votes / valids,
    seats: 0,
  }));

export const filterPartiesOverTreshold = (results, minThreshold) =>
  results.filter(({ percVotes }) => percVotes * 100 >= minThreshold);

export const addDistortion = (result, totalSeats) => {
  const percSeats = result.seats / totalSeats;

  return {
    ...result,
    percSeats,
    distortion: calculateDistortion(result.percVotes, percSeats),
  };
};
