export const formatDecimal = (percentage, decimals = 0) => {
  const factor = 10 ** decimals;

  return Math.floor(percentage * factor) / factor;
};

export const formatPercentage = percentage => formatDecimal(100 * percentage, 2);
