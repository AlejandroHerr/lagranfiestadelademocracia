export const dHondtQuotientCalculator = ({ seats, votes }) => votes / (seats + 1);

export const saintLagueQuotientCalculator = ({ seats, votes }) => votes / (2 * seats + 1);

export const saintLagueModQuotientCalculator = ({ seats, votes }) => {
  const quotient = seats ? 2 * seats + 1 : 1.4;

  return votes / quotient;
};
